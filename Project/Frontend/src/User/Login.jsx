import React, { useEffect, useState } from 'react';

import {
  useDispatch,
  useSelector
} from 'react-redux';

import {
  userLogin,
  clearMsg
} from '../Redux/User';
import {
  NavLink,
  useNavigate
} from 'react-router-dom';
import axios from 'axios';


function Login() {
  
  const [err, setError] = useState(null);
  const [msg,setMsg]= useState(null)
  const navigate = useNavigate();
 
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  console.log("user data ", user);
  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post('http://localhost:3000/login',user);
      console.log("login data ",res);
      console.log("buttin clicked")

            localStorage.setItem('loggedUesr',JSON.stringify(res.data.token))
              console.log("token = = ",res.data.token)
            if(res.data.error){
                setError(res.data)
            }
            setMsg(res.data.message);
            navigate('/');
       } catch (error) {
           console.log(error);
       }
  };

useEffect(() => {
 

}, []);
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
  {/* Success Message */}
       {
          err && (<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {err.error  }:{err.msg}
          </div>)
        }
        {
          msg && (<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {msg}
          </div>)
        }
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Account
        </h2>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >

          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleChange}
              required
              autoComplete="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>
          <div>

            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          {/* Button */}

          <button
            type="submit"
            // disabled={isLoading}
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
          
    Login
          </button>

        </form>

        {/* Register Link */}

        <p className="text-center text-gray-600 mt-4 text-sm">
          Don't have an account?
          <NavLink
            to="/register"
            className="text-blue-600 font-medium hover:underline ml-1"
          >
            Register
          </NavLink>

        </p>

      </div>

    </div>

  );
}
export default Login;