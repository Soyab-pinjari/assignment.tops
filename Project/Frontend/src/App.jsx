import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './Adminpanel/Users'
import Adminindex from './Adminpanel/Adminindex'
import Product from './Adminpanel/Product'
import Category from './Adminpanel/Category'
import Userindex from './User/UserIndex'
import RegisterForm from './User/RegisterForm'
import Login from './User/Login'



function App() {
  
  return (
    <>     
  <Routes>
       
         <Route path='/' element={<Userindex />}></Route>
 <Route path='/admin/*' element={<Adminindex />}></Route>
 <Route path='/registration' element={<RegisterForm/>}></Route>
 <Route path='/Login' element={<Login/>}></Route>
  </Routes>  
    </>
  )
}

export default App
