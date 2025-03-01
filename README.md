# Indian Post Office Locator

A web application that helps users find the nearest post offices based on their address and pincode. The application provides information about the closest post office and nearby alternatives.

## Features

- Find the nearest post office based on address and pincode
- Get detailed information about post offices including:
  - Office name
  - District
  - State
  - Pincode
  - Geographic coordinates (latitude/longitude)
- View multiple nearby post office alternatives
- Caching system for improved performance
- Cross-origin resource sharing (CORS) enabled
- RESTful API endpoints

## Tech Stack

### Backend
- Python 3.x
- Flask (Web Framework)
- Pandas (Data Processing)
- GeoPy (Geocoding and Distance Calculations)
- Flask-Caching (Response Caching)
- Flask-CORS (Cross-Origin Resource Sharing)

### Frontend
- React.js
- Material-UI
- Leaflet (for maps)
- Axios (API calls)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/indian-post-ui.git
cd indian-post-ui
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

## Configuration

1. Ensure you have the delivery.csv file in the correct location
2. Update the file path in main.py if necessary
3. Configure the cache settings in main.py if needed

## Usage

1. Start the backend server:
```bash
python main.py
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

3. Access the application at `http://localhost:3000`

## API Endpoints

### POST /predict
Find the nearest post office based on address and pincode.

**Request Body:**
```json
{
    "address": "string",
    "pincode": "string"
}
```

**Response:**
```json
{
    "nearest_office": {
        "officename": "string",
        "district": "string",
        "state": "string",
        "pincode": "string",
        "latitude": float,
        "longitude": float
    },
    "nearby_offices": [
        {
            "officename": "string",
            "district": "string",
            "state": "string",
            "pincode": "string",
            "latitude": float,
            "longitude": float
        }
    ]
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- India Post for providing post office data
- OpenStreetMap contributors for mapping data
- Nominatim for geocoding services 
