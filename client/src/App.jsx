import React from 'react';
import LoginPage from "./pages/Login.jsx";

import { Routes, Route} from "react-router-dom";
import BookingForm from './pages/Booking.jsx';
import HotelForm from './pages/Hotel.jsx';
import FlightForm from './pages/Flight.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/booking" element={<BookingForm />} />
      <Route path="/hotelbooking" element={<HotelForm/>} />
      <Route path="/flightbooking" element={<FlightForm/>} />
    </Routes>
  );
}

export default App;

