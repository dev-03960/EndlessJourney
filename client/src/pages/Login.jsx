import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pathUrl } from '../../config';
import { RotatingSquare } from 'react-loader-spinner'

const LoginPage = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState('');
    const [loader,setloader] = useState(false);
const navigate = useNavigate();
    const handleSubmit = async (e) => {
        setloader(true);
      e.preventDefault();
      const response = await fetch(`${pathUrl}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
     
      if (response.ok) {
        const data = await response.text();
        navigate("/booking");
        setMessage(data);
        localStorage.setItem("user","admin");
        setloader(false);
        setError('');
      } else if(response.statusText =="Unauthorized"){
        console.log(response);
        toast.error("Unauthorize user kindly write down the correct password");
        setloader(false);
      }
      else {
        toast.error(response.statusText);
        setloader(false);
      }
    };
console.log(loader);
    return (
       loader  == false ? (
        <>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8  space-y-8 ">
                <div>
                    <img className="mx-auto h-12 w-auto" src="https://traveloment.com/wp-content/uploads/2023/08/trav_logo-removebg-preview-768x213.png" alt="Company logo" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Our Application</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Please sign in to your account</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={(e) => { setUserName(e.target.value) }} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                    </div>

                    

                    {error && <p className="error">{error}</p>}

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM10 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <ToastContainer/>
        </>
       ):(
    <div className="flex items-center h-[100vh] justify-center">
<RotatingSquare
  visible={loader}
  height="100"
  width="100"
  color="#ffde59"
  ariaLabel="rotating-square-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>

       )
        
       
        
    );
};

export default LoginPage;
