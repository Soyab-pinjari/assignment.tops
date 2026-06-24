import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { clearMsg, logout } from '../Redux/User';
function Navbar() {
  
  const [logged,setLogged]= useState(false);
  const [user1,setUser1]=useState({})
   
  const dispatch = useDispatch();

  useEffect(()=>{
        let userInfo = localStorage.getItem('loggedUesr');
        console.log(userInfo);
        
        if(userInfo){
            userInfo = JSON.parse(userInfo)
            setUser1(userInfo ?? {})
            setLogged(true)
            
            console.log(user1);
          }
        },[logged])
        console.log("sdf",logged);

  const logout1 = ()=>{
      localStorage.removeItem('loggedUesr');
      setLogged(false);
      
  }
  return (
    <div>
       <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-blue-600">ShopEasy</h1>

      <ul className="hidden md:flex space-x-6 font-medium">
        <li><a href="#" class="hover:text-blue-600">Home</a></li>
        <li><a href="#categories" class="hover:text-blue-600">Categories</a></li>
        <li><a href="#catalog" class="hover:text-blue-600">Product Catalog</a></li>

 {
           logged==true ? 
             <><li>Welcome:{user1.username} <button className='py-2 px-4 border-2 bg-red-500' onClick={logout1}>Logout</button></li>
            <NavLink class="hover:text-blue-600" to={'/cart'}><i class="fa-solid fa-cart-arrow-down"></i></NavLink>
             </>
           : <li><NavLink className='py-2 px-4 border-2 bg-red-500'  to={'/login'}>Login</NavLink></li>
        }
         {/* <button className='py-2 px-4 border-2 bg-red-500 '><NavLink to="registration" class="hover:text-blue-600">Register</NavLink></button> */}
        
      </ul>

      <button className="md:hidden text-2xl">☰</button>
    </div>
  </nav>
    </div>
  )
}

export default Navbar