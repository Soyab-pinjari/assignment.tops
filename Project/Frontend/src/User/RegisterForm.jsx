import React, { useEffect, useState } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  clearMsg,
  userRegistration
} from "../Redux/User";

import {
  NavLink,
  useNavigate
} from "react-router-dom";
import axios from "axios";
import { log } from "firebase/firestore/pipelines";

function RegisterForm() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [err, setError] = useState(null);
  const [msg,setMsg]= useState(null)



  const handleChange = (e) => { 
    const {name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
    
  };
  
  console.log("user registreation ", user)


  // ================= HANDLE SUBMIT =================

  const handleSubmit = async(e) => {

  e.preventDefault();
    try {
      let res = await axios.post('http://localhost:3000/registration', user);
    
      if (res.data.errors) {
        console.log(res.data.name);
        console.log(res.data.message);
        setError({ name: res.data.name, message: res.data.message })
      }
      else{
          setMsg(res.data.msg)
          setTimeout(()=>{
            navigate('/login')
          },2000)
      }

    } catch (error) {
      console.log(error.data.name);
      console.log(error.data.message);
    }

  };



  // ================= SUCCESS NAVIGATION =================

useEffect(() => {

  }, [err,msg])


  return (

    <div
      style={{display: "flex",justifyContent: "center",alignItems: "center",minHeight: "100vh",backgroundColor: "#f5f5f5"
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
        }}
      >

         {
          err && (<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {err.name  }:{err.message}
          </div>)
        }
        {
          msg && (<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {msg}
          </div>)
        }

        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Register
        </h2>

  
        <form onSubmit={handleSubmit}>

          {/* Username */}

          <div style={{ marginBottom: "15px" }}>

            <label>
              Username
            </label>

            <input
              type="text"
  name="username"
  value={user.username}
  onChange={handleChange}
              required
              placeholder="Enter username"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid gray"
              }}
            />

          </div>



          {/* Email */}

          <div style={{ marginBottom: "15px" }}>

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              placeholder="Enter email"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid gray"
              }}
            />

          </div>



          {/* Password */}

          <div style={{ marginBottom: "15px" }}>

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                borderRadius: "5px",
                border: "1px solid gray"
              }}
            />

          </div>

          {/* Button */}

          <button
            type="submit"
             onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"

            }}
          >
Register
            
          </button>

        </form>



        {/* ================= LOGIN LINK ================= */}

        <p style={{ marginTop: "15px", textAlign: "center"}}>
          Already have an account?
          <NavLink
            to="/Login"
            style={{
              color: "blue",
              marginLeft: "5px"
            }}
          >
            Login
          </NavLink>

        </p>

      </div>

    </div>

  );
}

export default RegisterForm;