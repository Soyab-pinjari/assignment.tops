import React, { useEffect } from 'react'
import Navbar from './Navber'
import CategorySec from './CategorySec'
// import Footer from './Footer'
import ProductSec from './ProductSec'
import Hero from './Hero'





function Userindex() {
  
    const checkAuth = async () => {
        try {
            let token = localStorage.getItem('token');
            console.log(token);
            
            let res = await axios.get('http://localhost:3000/admin/Home', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }


    
   
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CategorySec />
      <ProductSec />
      {/* <Footer /> */}
    </div>
  )
}

export default Userindex