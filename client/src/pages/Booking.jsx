import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pathUrl } from '../../config';

const BookingForm = () => {

    const navigate = useNavigate();

    useEffect(()=>{
if(localStorage.getItem("user") != "admin")
{
 navigate("/");
}
    },[])
   const [formData, setFormData] = useState({
    to: '',
    subject: '',
    booking_details: {
      drop_of_location: '',
      no_of_days: '',
      pick_up_day: '',
      pick_up_date: '',
      pick_up_timing: '',
      pick_up_address: '',
      drop_of_day: '',
      drop_of_date: '',
      drop_of_timing: '',
      drop_of_address: '',
      confirmation_no: '',
      billing_amount: '',
      car_details: '',
      driver_name: '',
      name: '',
      email: '',
      phone: '',
      bookingNo: '',
      link: '',
      cancellation_policy:'',
       car_rental_name:'',
        terms_condition:''
    },
    error: null,
    success: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'to'|| name === 'subject') {
      setFormData({ ...formData, [name]: value });
    } else {
      const updatedBookingDetails = {
        ...formData.booking_details,
        [name]: value,
      };
      setFormData({
        ...formData,
        booking_details: updatedBookingDetails,
        to: name === 'email' ? value : formData.to,  // Update `to` if `email` is changed
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${pathUrl}sendCarEmail`, formData);
      setFormData({ 
        to: '',
        subject: '',
        booking_details: {
          drop_of_location: '',
          no_of_days: '',
          pick_up_day: '',
          pick_up_date: '',
          pick_up_timing: '',
          pick_up_address: '',
          drop_of_day: '',
          drop_of_date: '',
          drop_of_timing: '',
          drop_of_address: '',
          confirmation_no: '',
          billing_amount: '',
          car_details: '',
          driver_name: '',
          name: '',
          email: '',
          phone: '',
          bookingNo: '',
          link:'',
          cancellation_policy:'',
           car_rental_name:'',
        terms_condition:''
        },
        error: null,
        success: response.data.message,
      });
     toast.success("Email Sent Successfully");
    } catch (error) {
      setFormData({ ...formData, error: error.response.data.error, success: null });
      toast.error(error);
    }
  };

  return (
    <>
    <Header/>
    <div className="pt-4 flex justify-center items-center min-h-screen bg-[#dddde2eb]">
    <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded p-8 shadow-lg overflow-auto">
      <h2 className="text-2xl font-semibold mb-4"> Car Booking Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
    To
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.booking_details.email}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter email"
  />
</div>
        <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter subject"
                        />
                    </div>
        <div className="mb-4">
  <label htmlFor="drop_of_location" className="block text-gray-700 font-bold mb-2">
    Drop Off Location
  </label>
  <input
    type="text"
    id="drop_of_location"
    name="drop_of_location"
    value={formData.booking_details.drop_of_location}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter drop off location"
  />
</div>
<div className="mb-4">
  <label htmlFor="no_of_days" className="block text-gray-700 font-bold mb-2">
    Number of Days
  </label>
  <input
    type="text"
    id="no_of_days"
    name="no_of_days"
    value={formData.booking_details.no_of_days}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter number of days"
  />
</div>
<div className="mb-4">
  <label htmlFor="pick_up_day" className="block text-gray-700 font-bold mb-2">
    Pick Up Day
  </label>
  <input
    type="text"
    id="pick_up_day"
    name="pick_up_day"
    value={formData.booking_details.pick_up_day}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter pick up day"
  />
</div>
<div className="mb-4">
  <label htmlFor="pick_up_date" className="block text-gray-700 font-bold mb-2">
    Pick Up Date
  </label>
  <input
    type="text"
    id="pick_up_date"
    name="pick_up_date"
    value={formData.booking_details.pick_up_date}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter pick up date"
  />
</div>
<div className="mb-4">
  <label htmlFor="pick_up_timing" className="block text-gray-700 font-bold mb-2">
    Pick Up Timing
  </label>
  <input
    type="text"
    id="pick_up_timing"
    name="pick_up_timing"
    value={formData.booking_details.pick_up_timing}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter pick up timing"
  />
</div>
<div className="mb-4">
  <label htmlFor="pick_up_address" className="block text-gray-700 font-bold mb-2">
    Pick Up Address
  </label>
  <input
    type="text"
    id="pick_up_address"
    name="pick_up_address"
    value={formData.booking_details.pick_up_address}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter pick up address"
  />
</div>
<div className="mb-4">
  <label htmlFor="drop_of_day" className="block text-gray-700 font-bold mb-2">
    Drop Off Day
  </label>
  <input
    type="text"
    id="drop_of_day"
    name="drop_of_day"
    value={formData.booking_details.drop_of_day}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter drop off day"
  />
</div>
<div className="mb-4">
  <label htmlFor="drop_of_date" className="block text-gray-700 font-bold mb-2">
    Drop Off Date
  </label>
  <input
    type="text"
    id="drop_of_date"
    name="drop_of_date"
    value={formData.booking_details.drop_of_date}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter drop off date"
  />
</div>
<div className="mb-4">
  <label htmlFor="drop_of_timing" className="block text-gray-700 font-bold mb-2">
    Drop Off Timing
  </label>
  <input
    type="text"
    id="drop_of_timing"
    name="drop_of_timing"
    value={formData.booking_details.drop_of_timing}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter drop off timing"
  />
</div>
<div className="mb-4">
  <label htmlFor="drop_of_address" className="block text-gray-700 font-bold mb-2">
    Drop Off Address
  </label>
  <input
    type="text"
    id="drop_of_address"
    name="drop_of_address"
    value={formData.booking_details.drop_of_address}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter drop off address"
  />
</div>
<div className="mb-4">
  <label htmlFor="confirmation_no" className="block text-gray-700 font-bold mb-2">
   Car Confirmation Number
  </label>
  <input
    type="text"
    id="confirmation_no"
    name="confirmation_no"
    value={formData.booking_details.confirmation_no}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter confirmation number"
  />
</div>
<div className="mb-4">
  <label htmlFor="billing_amount" className="block text-gray-700 font-bold mb-2">
    Billing Amount
  </label>
  <input
    type="text"
    id="billing_amount"
    name="billing_amount"
    value={formData.booking_details.billing_amount}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter billing amount"
  />
</div>
<div className="mb-4">
  <label htmlFor="car_details" className="block text-gray-700 font-bold mb-2">
    Car Details
  </label>
  <input
    type="text"
    id="car_details"
    name="car_details"
    value={formData.booking_details.car_details}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter car details"
  />
</div>
<div className="mb-4">
  <label htmlFor="driver_name" className="block text-gray-700 font-bold mb-2">
    Driver Name
  </label>
  <input
    type="text"
    id="driver_name"
    name="driver_name"
    value={formData.booking_details.driver_name}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter driver name"
  />
</div>
<div className="mb-4">
  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
    Name
  </label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.booking_details.name}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter name"
  />
</div>

<div className="mb-4">
  <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
    Phone
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={formData.booking_details.phone}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter phone"
  />
</div>
<div className="mb-4">
  <label htmlFor="bookingNo" className="block text-gray-700 font-bold mb-2">
    Booking Number
  </label>
  <input
    type="text"
    id="bookingNo"
    name="bookingNo"
    value={formData.booking_details.bookingNo}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter booking number"
  />
</div>
<div className="mb-4">
  <label htmlFor="cancellation_policy" className="block text-gray-700 font-bold mb-2">
    Cancellation Policy
  </label>
  <input
    type="text"
    id="cancellation_policy"
    name="cancellation_policy"
    value={formData.booking_details.cancellation_policy}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter booking number"
  />
</div>
<div className="mb-4">
  <label htmlFor="car_rental_name" className="block text-gray-700 font-bold mb-2">
    Car Rental Company Name
  </label>
  <input
    type="text"
    id="car_rental_name"
    name="car_rental_name"
    value={formData.booking_details.car_rental_name}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter booking number"
  />
</div>
<div className="mb-4">
  <label htmlFor="terms_condition" className="block text-gray-700 font-bold mb-2">
    Confirmation text
  </label>
  <input
    type="text"
    id="terms_condition"
    name="terms_condition"
    value={formData.booking_details.terms_condition}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter booking number"
  />
</div>
<div className="mb-4">
  <label htmlFor="bookingNo" className="block text-gray-700 font-bold mb-2">
    Payment Link
  </label>
  <input
    type="text"
    id="link"
    name="link"
    value={formData.booking_details.link}
    onChange={handleChange}
    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    placeholder="Enter Payment Link"
  />
</div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {formData.error && <p className="text-red-500 mt-4">{formData.error}</p>}
      {formData.success && <p className="text-green-500 mt-4">{formData.success}</p>}
    </div>
    </div>
    <ToastContainer/>
    </>
    
    
  );
};

export default BookingForm;
