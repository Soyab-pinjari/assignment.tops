import React, { useEffect,useState,useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory} from '../Redux/Category';
import axios from 'axios';

import { CategoryContext } from '../Context/CategoryContext';
function CategorySec() {
  const [catArray,setCatArray]=useState([]);
const {catname,setCatName}=useContext(CategoryContext)
 const getCategory = async () => {
    try {
      let token = localStorage.getItem('token');
            console.log(token);
     let res = await axios.get('http://localhost:3000/admin/category', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
      if (res) {
        console.log("responce data",res.data);
      setCatArray(res.data.catdata);
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log("cat array = ",catArray);
 const dispatch = useDispatch()
  useEffect(()=>{
      getCategory();
  },[])
  return (
    <div>
      <section id="categories" class="max-w-7xl mx-auto px-4 py-16">
    <h3 className="text-3xl font-semibold mb-8 text-center">Shop by Category</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          catArray && catArray.map((item,i)=>(
             <div class="bg-white shadow p-4 rounded-lg text-center hover:shadow-lg cursor-pointer">
              <button
      onClick={() => {
        alert(item._id);
        setCatName(item._id);
      }}
    >
      <img
        src={`http://localhost:3000/${item.cimage}`}
        alt={item.cname}
        style={{ height: "200px", width: "200px" }}
      />
      {item.cname}
    </button></div>
          ))
      }
    
    </div>
  </section>
    </div>
  )
}

export default CategorySec