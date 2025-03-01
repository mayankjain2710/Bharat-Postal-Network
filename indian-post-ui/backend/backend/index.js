require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const path = require('path');

//new backend updated code

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// Rate limiting to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.'
});
app.use(limiter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const DetailsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

//address
//first name
//lastname
//country
//state
//city
//pincode
//email
//number

const UserAdressSchema = new mongoose.Schema({
  address: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true }
}, { timestamps: true });

const Details = mongoose.model("Details", DetailsSchema);

const User = mongoose.model('User', UserSchema);

const UserAdress = mongoose.model('UserAdress', UserAdressSchema);



// Sign Up User
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if(!username || !email || !password) return res.status(400).json({ message: 'All fields are required' });
    
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: 'Email already exists' });
    
    
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'User name already exists' });
    

    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    
    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error signing up user', error });
  }
});

//address
//first name
//lastname
//country
//state
//city
//pincode
//email
//number

app.post('/address/form', async (req, res) => {
  try {
    const { address, firstName, lastName, country, state, city, pincode, email , number } = req.body;
    if(!address || !firstName || !lastName || !country || !state || !city || !pincode || !email || !number) return res.status(400).json({ message: 'All fields are required' });
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(400).json({ message: 'Login first' });
    //send email
    const useraddress = new UserAdress({ address, firstName, lastName, country, state, city, pincode, email , number });
    await useraddress.save();
    
    res.status(201).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });    
  }
});




// details
app.post('/details/form', async (req, res) => {
  try {
    const { username, email , number , message } = req.body;
    if(!username || !email || !number || !message) return res.status(400).json({ message: 'All fields are required' });
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(400).json({ message: 'Login first' });
    //send email
    const details = new Details({ username, email , number , message });
    await details.save();
    
    res.status(201).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

// Login User
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({ message: 'All fields are required' });
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials or Login first' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '15m' });
    
    res.cookie('jwt', token, { httpOnly: true, secure: true });
    res.json({ message: 'Login successful', username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

app.post('/logout', (req, res) => {
  res.clearCookie('jwt');
  res.json({ message: 'Logout successful' });
});

// Middleware to Verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = user;
    next();
  });
};

// Protected Route Example
app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the dashboard!', userId: req.user.userId,username: req.user.username });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
