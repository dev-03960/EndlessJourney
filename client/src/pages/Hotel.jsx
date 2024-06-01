import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pathUrl } from '../../config';

const HotelForm = () => {

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
        hotel_booking_details: {
            billing_amount: '',
            checkin_date: '',
            checkin_time: '',
            checkout_date: '',
            checkout_time: '',
            room_type: '',
            hotel_name: '',
            hotel_ratting: '',
            hotel_email: '',
            hotel_phone: '',
            hotel_address: '',
            room_no: '',
            adults_no: '',
            childs_no: '',
            passenger_name: [],
            email: '',
            phone: '',
            bookingNo: '',
            payment_paid: '',
            pet_name: '',
            booking_date: '',
            name: '',
            cancel_policy: '',
            link:''
        },
        error: null,
        success: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'to' || name === 'subject') {
          setFormData({ ...formData, [name]: value });
        } else {
          setFormData({
            ...formData,
            hotel_booking_details: {
              ...formData.hotel_booking_details,
              [name]: value,
            },
          });
        }
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${pathUrl}sendHotelEmail`, formData);
            setFormData({ 
                to: '',
                subject: '',
                hotel_booking_details: {
                    billing_amount: '',
                    checkin_date: '',
                    checkin_time: '',
                    checkout_date: '',
                    checkout_time: '',
                    room_type: '',
                    hotel_name: '',
                    hotel_ratting: '',
                    hotel_email: '',
                    hotel_phone: '',
                    hotel_address: '',
                    room_no: '',
                    adults_no: '',
                    childs_no: '',
                    passenger_name: [],
                    email: '',
                    phone: '',
                    bookingNo: '',
                    payment_paid: '',
                    pet_name: '',
                    booking_date: '',
                    name: '',
                    cancel_policy: '',
                    link:''
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
                <h2 className="text-2xl font-semibold mb-4">Hotel Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
                        <input
                            type="email"
                            id="to"
                            name="to"
                            value={formData.to}
                            onChange={handleChange}
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter recipient email"
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
                   
                    {/* Hotel Booking Details */}
            

<div className="mb-4">
    <label htmlFor="checkin_date" className="block text-gray-700 font-bold mb-2">Check-in Date</label>
    <input
        type="text"
        id="checkin_date"
        name="checkin_date"
        value={formData.hotel_booking_details.checkin_date}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter check-in date"
    />
</div>

<div className="mb-4">
    <label htmlFor="checkin_time" className="block text-gray-700 font-bold mb-2">Check-in Time</label>
    <input
        type="text"
        id="checkin_time"
        name="checkin_time"
        value={formData.hotel_booking_details.checkin_time}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter check-in time"
    />
</div>

<div className="mb-4">
    <label htmlFor="checkout_date" className="block text-gray-700 font-bold mb-2">Checkout Date</label>
    <input
        type="text"
        id="checkout_date"
        name="checkout_date"
        value={formData.hotel_booking_details.checkout_date}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter checkout date"
    />
</div>

<div className="mb-4">
    <label htmlFor="checkout_time" className="block text-gray-700 font-bold mb-2">Checkout Time</label>
    <input
        type="text"
        id="checkout_time"
        name="checkout_time"
        value={formData.hotel_booking_details.checkout_time}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter checkout time"
    />
</div>

<div className="mb-4">
    <label htmlFor="room_type" className="block text-gray-700 font-bold mb-2">Room Type</label>
    <input
        type="text"
        id="room_type"
        name="room_type"
        value={formData.hotel_booking_details.room_type}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter room type"
    />
</div>

<div className="mb-4">
    <label htmlFor="hotel_name" className="block text-gray-700 font-bold mb-2">Hotel Name</label>
    <input
        type="text"
        id="hotel_name"
        name="hotel_name"
        value={formData.hotel_booking_details.hotel_name}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter hotel name"
    />
</div>

<div className="mb-4">
    <label htmlFor="hotel_ratting" className="block text-gray-700 font-bold mb-2">Hotel Rating</label>
    <input
        type="text"
        id="hotel_ratting"
        name="hotel_ratting"
        value={formData.hotel_booking_details.hotel_ratting}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter hotel rating"
    />
</div>

{/* <div className="mb-4">
    <label htmlFor="hotel_email" className="block text-gray-700 font-bold mb-2">Hotel Email</label>
    <input
        type="email"
        id="hotel_email"
        name="hotel_email"
        value={formData.hotel_booking_details.hotel_email}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter hotel email"
    />
</div>

<div className="mb-4">
    <label htmlFor="hotel_phone" className="block text-gray-700 font-bold mb-2">Hotel Phone</label>
    <input
        type="tel"
        id="hotel_phone"
        name="hotel_phone"
        value={formData.hotel_booking_details.hotel_phone}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter hotel phone"
    />
</div> */}

<div className="mb-4">
    <label htmlFor="hotel_address" className="block text-gray-700 font-bold mb-2">Hotel Address</label>
    <input
        type="text"
        id="hotel_address"
        name="hotel_address"
        value={formData.hotel_booking_details.hotel_address}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter hotel address"
    />
</div>

<div className="mb-4">
    <label htmlFor="room_no" className="block text-gray-700 font-bold mb-2">Number of Rooms</label>
    <input
        type="text"
        id="room_no"
        name="room_no"
        value={formData.hotel_booking_details.room_no}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter room number"
    />
</div>

<div className="mb-4">
    <label htmlFor="adults_no" className="block text-gray-700 font-bold mb-2">Number of Adults</label>
    <input
        type="text"
        id="adults_no"
        name="adults_no"
        value={formData.hotel_booking_details.adults_no}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter number of adults"
    />
</div>

<div className="mb-4">
    <label htmlFor="childs_no" className="block text-gray-700 font-bold mb-2">Number of Childrens</label>
    <input
        type="text"
        id="childs_no"
        name="childs_no"
        value={formData.hotel_booking_details.childs_no}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter number of children"
    />
</div>

<div className="mb-4">
    <label htmlFor="passenger_name" className="block text-gray-700 font-bold mb-2">Guest Name(s)</label>
    <input
        type="text"
        id="passenger_name"
        name="passenger_name"
        value={formData.hotel_booking_details.passenger_name.join(', ')}
        onChange={(e) => {
            const passengerNames = e.target.value.split(',').map(name => name.trim());
            setFormData({
                ...formData,
                hotel_booking_details: {
                    ...formData.hotel_booking_details,
                    passenger_name: passengerNames,
                },
            });
        }}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter passenger names separated by commas"
    />
</div>

<div className="mb-4">
    <label htmlFor="bookingNo" className="block text-gray-700 font-bold mb-2">Booking Number</label>
    <input
        type="text"
        id="bookingNo"
        name="bookingNo"
        value={formData.hotel_booking_details.bookingNo}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter booking number"
    />
</div>

{/* <div className="mb-4">
    <label htmlFor="payment_paid" className="block text-gray-700 font-bold mb-2">Payment Paid</label>
    <input
        type="text"
        id="payment_paid"
        name="payment_paid"
        value={formData.hotel_booking_details.payment_paid}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter payment paid"
    />
</div> */}

{/* <div className="mb-4">
    <label htmlFor="pet_name" className="block text-gray-700 font-bold mb-2">Pet Name</label>
    <input
        type="text"
        id="pet_name"
        name="pet_name"
        value={formData.hotel_booking_details.pet_name}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter pet name"
    />
</div> */}

<div className="mb-4">
    <label htmlFor="booking_date" className="block text-gray-700 font-bold mb-2">Booking Date</label>
    <input
        type="text"
        id="booking_date"
        name="booking_date"
        value={formData.hotel_booking_details.booking_date}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter booking date"
    />
</div>

<div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Card Holder Name</label>
    <input
        type="text"
        id="name"
        name="name"
        value={formData.hotel_booking_details.name}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter name"
    />
</div>

<div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
    <input
        type="email"
        id="email"
        name="email"
        value={formData.hotel_booking_details.email}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter email"
    />
</div>

<div className="mb-4">
    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
    <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.hotel_booking_details.phone}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter phone number"
    />
</div>


<div className="mb-4">
    <label htmlFor="billing_amount" className="block text-gray-700 font-bold mb-2">Total Cost</label>
    <input
        type="text"
        id="billing_amount"
        name="billing_amount"
        value={formData.hotel_booking_details.billing_amount}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter billing amount"
    />
</div>
<div className="mb-4">
    <label htmlFor="cancel_policy" className="block text-gray-700 font-bold mb-2">Payment Link</label>
    <input
        type="text"
        id="link"
        name="link"
        value={formData.hotel_booking_details.link}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter Payment Link"
    />
</div>

                    {/* Add other hotel booking details fields similarly */}

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
        <ToastContainer />
        </>
       
    );
};

export default HotelForm;
