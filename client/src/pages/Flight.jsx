import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pathUrl } from '../../config';

const FlightForm = () => {

    const navigate = useNavigate();

    useEffect(()=>{
if(localStorage.getItem("user") != "admin")
{
 navigate("/");
}
    },[])
   
    const [formValues, setFormValues] = useState({
        to: '',
        subject: '',
        pickupDay: '',
        pickupDate: '',
        pickupDepartsTiming: '',
        pickupDepartsLocation: '',
        pickupArrivalTiming: '',
        pickupArrivalLocation: '',
        pickupFlightDuration: '',
        pickupAirlineName: '',
        dropoffDay: '',
        dropoffDate: '',
        dropoffDepartsTiming: '',
        dropoffDepartsLocation: '',
        dropoffArrivalTiming: '',
        dropoffArrivalLocation: '',
        dropoffFlightDuration: '',
        dropoffAirlineName: '',
        confirmationNo: '',
        billingAmount: '',
        tripType: '',
        airportName: '',
        passengerName: [],
        email: '',
        phone: '',
        bookingNo: '',
        paymentPaid: '',
        link:'',
        bookingDate: '',
        tripPickupLocation: '',
        tripDropoffLocation: '',
        name: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const payload = {
            to: formValues.to,
            subject: formValues.subject,
            flight_booking_details: {
              pickup_info: {
                pick_up_day: formValues.pickupDay,
                pick_up_date: formValues.pickupDate,
                departs_timing: formValues.pickupDepartsTiming,
                departs_location: formValues.pickupDepartsLocation,
                arrival_timing: formValues.pickupArrivalTiming,
                arrival_location: formValues.pickupArrivalLocation,
                flight_duration: formValues.pickupFlightDuration,
                airlineName: formValues.pickupAirlineName
              },
              dropof_info: {
                pick_up_day: formValues.dropoffDay,
                pick_up_date: formValues.dropoffDate,
                departs_timing: formValues.dropoffDepartsTiming,
                departs_location: formValues.dropoffDepartsLocation,
                arrival_timing: formValues.dropoffArrivalTiming,
                arrival_location: formValues.dropoffArrivalLocation,
                flight_duration: formValues.dropoffFlightDuration,
                airlineName: formValues.dropoffAirlineName
              },
              confirmationNo: formValues.confirmationNo,
              billing_amount: formValues.billingAmount,
              trip_type: formValues.tripType,
              airport_name: formValues.airportName,
              passenger_name: formValues.passengerName.split(',').map(name => name.trim()),
              email: formValues.email,
              phone: formValues.phone,
              bookingNo: formValues.bookingNo,
              payment_paid: formValues.paymentPaid,
              link: formValues.link,
              booking_date: formValues.bookingDate,
              tripPickupLocation: formValues.tripPickupLocation,
              tripDropofLocation: formValues.tripDropofLocation,
              name: formValues.name
            }
          };
      
          const response = await axios.post(`${pathUrl}sendFightEmail`, payload);
          toast.success(response.data.message);
          setFormValues({
            to: '',
            subject: '',
            pickupDay: '',
            pickupDate: '',
            pickupDepartsTiming: '',
            pickupDepartsLocation: '',
            pickupArrivalTiming: '',
            pickupArrivalLocation: '',
            pickupFlightDuration: '',
            pickupAirlineName: '',
            dropoffDay: '',
            dropoffDate: '',
            dropoffDepartsTiming: '',
            dropoffDepartsLocation: '',
            dropoffArrivalTiming: '',
            dropoffArrivalLocation: '',
            dropoffFlightDuration: '',
            dropoffAirlineName: '',
            confirmationNo: '',
            billingAmount: '',
            tripType: '',
            airportName: '',
            passengerName: '',
            email: '',
            phone: '',
            bookingNo: '',
            paymentPaid: '',
            link: '',
            bookingDate: '',
            tripPickupLocation: '',
            tripDropoffLocation: '',
            name: ''
            
          });
        } catch (error) {
            toast.error(error);
        }
      };
      

  return (
    <>
    <Header/>
    <div className="pt-4 flex justify-center items-center min-h-screen bg-[#dddde2eb]">
    <div className="w-full md:w-3/4 lg:w-1/2 bg-white rounded p-8 shadow-lg overflow-auto">
      <h2 className="text-2xl font-semibold mb-4"> Flight Booking Form</h2>
      <form onSubmit={handleSubmit}>
      <div className="mb-4">
                        <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
                        <input
                            type="email"
                            id="to"
                            name="to"
                            value={formValues.to}
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
                            value={formValues.subject}
                            onChange={handleChange}
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter subject"
                        />
                    </div>

      <div className="mb-4">
    <label htmlFor="pickup_day" className="block text-gray-700 font-bold mb-2">Departing Flight Day</label>
    <input
        type="text"
        id="pickupDay"
        name="pickupDay"
        value={formValues.pickupDay}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter pickup day"
    />
</div>

<div className="mb-4">
    <label htmlFor="pickup_date" className="block text-gray-700 font-bold mb-2">Departing Flight Date</label>
    <input
        type="text"
        id="pickupDate"
        name="pickupDate"
        value={formValues.pickupDate}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter pickup date"
    />
</div>

<div className="mb-4">
    <label htmlFor="departs_timing" className="block text-gray-700 font-bold mb-2"> Departing Flight Departs Timing</label>
    <input
        type="text"
        id="pickupDepartsTiming"
        name="pickupDepartsTiming"
        value={formValues.pickupDepartsTiming}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter departs timing"
    />
</div>

<div className="mb-4">
    <label htmlFor="departs_location" className="block text-gray-700 font-bold mb-2">Departing Flight Departs Location</label>
    <input
        type="text"
        id="pickupDepartsLocation"
        name="pickupDepartsLocation"
        value={formValues.pickupDepartsLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter departs location"
    />
</div>

<div className="mb-4">
    <label htmlFor="arrival_timing" className="block text-gray-700 font-bold mb-2">Departing Flight Arrival Timing</label>
    <input
        type="text"
        id="pickupArrivalTiming"
        name="pickupArrivalTiming"
        value={formValues.pickupArrivalTiming}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter arrival timing"
    />
</div>

<div className="mb-4">
    <label htmlFor="arrival_location" className="block text-gray-700 font-bold mb-2">Departing Flight Arrival Location</label>
    <input
        type="text"
        id="pickupArrivalLocation"
        name="pickupArrivalLocation"
        value={formValues.pickupArrivalLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter arrival location"
    />
</div>

<div className="mb-4">
    <label htmlFor="flight_duration" className="block text-gray-700 font-bold mb-2">Departing Flight Duration</label>
    <input
        type="text"
        id="pickupFlightDuration"
        name="pickupFlightDuration"
        value={formValues.pickupFlightDuration}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter flight duration"
    />
</div>

<div className="mb-4">
    <label htmlFor="airlineName" className="block text-gray-700 font-bold mb-2">Departing Flight Airline Name</label>
    <input
        type="text"
        id="pickupAirlineName"
        name="pickupAirlineName"
        value={formValues.pickupAirlineName}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter airline name"
    />
</div>

<div className="mb-4">
    <label htmlFor="dropof_day" className="block text-gray-700 font-bold mb-2">Return Flight Day</label>
    <input
        type="text"
        id="dropoffDay"
        name="dropoffDay"
        value={formValues.dropoffDay}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter dropoff day"
    />
</div>

<div className="mb-4">
    <label htmlFor="dropof_date" className="block text-gray-700 font-bold mb-2">Return Flight Date</label>
    <input
        type="text"
        id="dropoffDate"
        name="dropoffDate"
        value={formValues.dropoffDate}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter dropoff date"
    />
</div>

<div className="mb-4">
    <label htmlFor="departs_timing" className="block text-gray-700 font-bold mb-2">Return Flight Departs Timing</label>
    <input
        type="text"
        id="dropoffDepartsTiming"
        name="dropoffDepartsTiming"
        value={formValues.dropoffDepartsTiming}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter departs timing"
    />
</div>

<div className="mb-4">
    <label htmlFor="departs_location" className="block text-gray-700 font-bold mb-2">Return Flight Departs Location</label>
    <input
        type="text"
        id="dropoffDepartsLocation"
        name="dropoffDepartsLocation"
        value={formValues.dropoffDepartsLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter departs location"
    />
</div>

<div className="mb-4">
    <label htmlFor="arrival_timing" className="block text-gray-700 font-bold mb-2">Return Flight Arrival Timing</label>
    <input
        type="text"
        id="dropoffArrivalTiming"
        name="dropoffArrivalTiming"
        value={formValues.dropoffArrivalTiming}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter arrival timing"
    />
</div>

<div className="mb-4">
    <label htmlFor="arrival_location" className="block text-gray-700 font-bold mb-2">Return Flight Arrival Location</label>
    <input
        type="text"
        id="dropoffArrivalLocation"
        name="dropoffArrivalLocation"
        value={formValues.dropoffArrivalLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter arrival location"
    />
</div>

<div className="mb-4">
    <label htmlFor="flight_duration" className="block text-gray-700 font-bold mb-2">Return Flight Duration</label>
    <input
        type="text"
        id="dropoffFlightDuration"
        name="dropoffFlightDuration"
        value={formValues.dropoffFlightDuration}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter flight duration"
    />
</div>

<div className="mb-4">
    <label htmlFor="airlineName" className="block text-gray-700 font-bold mb-2">Return Flight Airline Name</label>
    <input
        type="text"
        id="dropoffAirlineName"
        name="dropoffAirlineName"
        value={formValues.dropoffAirlineName}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter airline name"
    />
</div>


{/* <div className="mb-4">
    <label htmlFor="confirmationNo" className="block text-gray-700 font-bold mb-2">Confirmation Number</label>
    <input
        type="text"
        id="confirmationNo"
        name="confirmationNo"
        value={formValues.confirmationNo}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter confirmation number"
    />
</div> */}



{/* <div className="mb-4">
    <label htmlFor="trip_type" className="block text-gray-700 font-bold mb-2">Trip Type</label>
    <input
        type="text"
        id="tripType"
        name="tripType"
        value={formValues.tripType}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter trip type"
    />
</div> */}

{/* <div className="mb-4">
    <label htmlFor="airport_name" className="block text-gray-700 font-bold mb-2">Airport Name</label>
    <input
        type="text"
        id="airportName"
        name="airportName"
        value={formValues.airportName}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter airport name"
    />
</div> */}

<div className="mb-4">
  <label htmlFor="passenger_name" className="block text-gray-700 font-bold mb-2">Passenger Name(s)</label>
  <input
    type="text"
    id="passengerName"
    name="passengerName"
    value={formValues.passengerName}
    onChange={handleChange}
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
        value={formValues.bookingNo}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter booking number"
    />
</div>

{/* <div className="mb-4">
    <label htmlFor="payment_paid" className="block text-gray-700 font-bold mb-2">Payment Paid</label>
    <input
        type="text"
        id="paymentPaid"
        name="paymentPaid"
        value={formValues.paymentPaid}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter payment paid"
    />
</div> */}

<div className="mb-4">
    <label htmlFor="booking_date" className="block text-gray-700 font-bold mb-2">Booking Date</label>
    <input
        type="text"
        id="bookingDate"
        name="bookingDate"
        value={formValues.bookingDate}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter booking date"
    />
</div>

{/* <div className="mb-4">
    <label htmlFor="tripPickupLocation" className="block text-gray-700 font-bold mb-2">Trip Pickup Location</label>
    <input
        type="text"
        id="tripPickupLocation"
        name="tripPickupLocation"
        value={formValues.tripPickupLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter trip pickup location"
    />
</div> */}

{/* <div className="mb-4">
    <label htmlFor="tripDropofLocation" className="block text-gray-700 font-bold mb-2">Trip Dropoff Location</label>
    <input
        type="text"
        id="tripDropoffLocation"
        name="tripDropoffLocation"
        value={formValues.tripDropoffLocation}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter trip dropoff location"
    />
</div> */}

<div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Card Holder Name</label>
    <input
        type="text"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter name"
    />
</div>
<div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
    <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter email"
    />
</div>

<div className="mb-4">
    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
    <input
        type="tel"
        id="phone"
        name="phone"
        value={formValues.phone}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter phone number"
    />
</div>
<div className="mb-4">
    <label htmlFor="billing_amount" className="block text-gray-700 font-bold mb-2">Total Cost</label>
    <input
        type="text"
        id="billingAmount"
        name="billingAmount"
        value={formValues.billingAmount}
        onChange={handleChange}
        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Enter billing amount"
    />
</div>
<div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Payment Link</label>
    <input
        type="text"
        id="link"
        name="link"
        value={formValues.link}
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
      
    </div>
    </div>
    <ToastContainer/>
    </>
    
    
  );
};

export default FlightForm;
