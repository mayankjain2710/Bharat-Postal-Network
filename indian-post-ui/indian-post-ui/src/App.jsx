import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import BookingSection from "./components/BookingSection";
import AddressForm from "./components/AddressForm";
import Footer from "./components/Footer";
import WelcomeAnimation from "./components/WelcomeAnimation";
import HeroSection from "./components/HeroSection";
import LoginPage from "./components/LoginPage";
import Signup from "./components/SignUpPage";
import ChatBot from "./components/ChatBot";

// Layout component that includes Navbar and Footer
const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar className="sticky top-0 z-50" />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </>
  );
};

// Auth Layout without Navbar and Footer
const AuthLayout = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  );
};

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <Router>
      {showWelcome && <WelcomeAnimation onComplete={() => setShowWelcome(false)} />}
      <div className={`min-h-screen bg-[#1f2937] flex flex-col relative ${showWelcome ? 'hidden' : ''}`}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          } />
          <Route path="/signup" element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          } />

          {/* Main Routes with Navbar and Footer */}
          <Route path="/" element={
            <MainLayout>
              <HeroSection />
              <BookingSection />
            </MainLayout>
          } />
          <Route path="/mail" element={
            <MainLayout>
              <BookingSection />
            </MainLayout>
          } />
          <Route path="/speed-trace" element={
            <MainLayout>
              <BookingSection />
            </MainLayout>
          } />
          <Route path="/parcel" element={
            <MainLayout>
              <BookingSection />
            </MainLayout>
          } />
          <Route path="/find-post-office" element={
            <MainLayout>
              <AddressForm />
            </MainLayout>
          } />
          <Route path="/booking" element={
            <MainLayout>
              <BookingSection />
            </MainLayout>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
import QuickAccess from "./cardcomponents/QuickAccess";
import PostageCalculator from "./cardcomponents/PostageCalculator";
import PostageResult from "./cardcomponents/PostageResult";
import NavigationMenu from "./cardcomponents/NavigationMenu";
import TrackAccess from "./cardcomponents/TrackAccess";
import TrackTraceTable from "./cardcomponents/TrackTraceTable";
import TrackTrackForm from "./cardcomponents/TrackTrackForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center space-y-6 p-6">
      <QuickAccess />
      <PostageCalculator />
      <PostageResult />
      <TrackAccess />
      <NavigationMenu />
      <TrackTraceTable />
      <TrackTrackForm />
    </div>
  );
}

export default App;
*/