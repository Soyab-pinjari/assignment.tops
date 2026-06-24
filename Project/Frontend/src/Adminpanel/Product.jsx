import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { getCategory } from '../Redux/Category';
// import {addProduct, deleteProduct, getProductById,   getProducts, updateProduct  } from '../Redux/Product';
function Product() {
    const dispatch = useDispatch();
    const [eid,setEid]= useState(null)

  const [catArray,setCatArray]= useState([]);
  const {proError,proMsg,isloadingP,productArray,singleProduct}=useSelector((state)=>state.product)
  const [product, setProduct] = useState({
    pname: '',
    cname: '',
    price: '',
    pimage: [],
    description: ''

  })
const [productData,setProductData]=useState([]);
  const cleanUp = ()=>{
       setProduct({
    pname: '',
    cname: '',
    price: '',
    pimage: [],
    description: '',
  })
  }
  let proImgArray = [];



 const handleFile = (e) => {
    let fileArray = e.target.files;
       const file = e.target.files[0];

    setProduct({
      ...product,
      pimage:file
    })

  }
  const handleChange = (e) => {
    const { name, value } = e.target;

   

    setProduct({
      ...product,
      [name]: value
    })
  }

  const getCategory = async(e)=>{
    try {
          let token = localStorage.getItem('token');
            console.log(token);
     let result = await axios.get('http://localhost:3000/admin/product', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

      if(result){
          console.log(result.data);
        setCatArray(result.data.catdata)
      }
    } catch (error) {
       console.log(error);
    }
  }
  const handleClick = async(e) => {
    e.preventDefault();
      console.log(product);
try {
      const formData = new FormData();
      formData.append("pname", product.pname);
      formData.append("price", product.price);
      formData.append("cname", product.cname);
      formData.append("pimage", product.pimage); // File objec
      formData.append("description",product.description)
     for (let pair of formData.entries()) {
  console.log(pair[0], pair[1]);
}
      
      let res = await axios.post("http://localhost:3000/admin/product/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
      if (res) {
          console.log("API DATA:", res.data);
        alert(res.data.msg)
        setProduct({})
      }
    } catch (error) {
      console.log(error);

    }
  }

 

 const getProductsData = async () => {
    try {
      let token = localStorage.getItem('token');
            console.log(token);
     let res = await axios.get('http://localhost:3000/admin/product', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
      if (res) {

    // console.log("FULL RESPONSE", res);

        console.log("get p data data",res.data);
        setProductData(res.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log("product data " ,productData);

  useEffect(() => {
    getCategory();
    getProductsData();
    
  }, [])

  useEffect(() => {
    setProduct(singleProduct ?? {})
  }, [singleProduct, eid])

  return (
     <div>
      
      <h2 className='text-2xl'>Add Product</h2>
     {
        isloadingP && <h3>Loading...</h3>
      }
      {
        proError && <p>{proError}</p>
      }
      {
        proMsg && <h3>{proMsg}</h3>
      }
      <form method='post'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-12">
              <div className="sm:col-span-3">
                <label for="first-name" className="block text-sm/6 font-medium text-gray-900">Category name</label>
                <div className="mt-2">
                  <select id="first-name" type="text" name="cname" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required onChange={handleChange}   value={product.cname ?? ''}>
                    <option value="">Select</option>
                    {
                      catArray && catArray.map((index, i) => (
                        <option key={index._id} value={index._id}>{index.cname ?? ''}</option>
                      ))
                    }
                  </select>

                </div>
              </div>

              <div className="sm:col-span-3">
                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Product Name </label>
                <div className="mt-2">
                  <input id="last-name" type="text" name="pname" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required onChange={handleChange}   value={product.pname || ''}/>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Product image</label>
                <div className="mt-2">
                  <input id="last-name" type="file" name="pimage[]" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required onChange={handleFile} multiple />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Product  Price</label>
                <div className="mt-2">
                  <input id="last-name" type="text" name="price" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required onChange={handleChange} value={product.price || ''} />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Description</label>
                <div className="mt-2">
                  <input id="last-name" type="text" name="description" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required onChange={handleChange} value={product.description || ''}/>
                </div>
              </div>

            </div>
            <div className="sm:col-span-3">

              <div className="mt-3">
              {
                  eid && eid != null ?
                  <button type='button' className='p-2 bg-blue-600 text-white' onClick={()=>{
                    dispatch( updateProduct({
                       pid:eid,
                       data:product
                    }))
                  }}>Update</button>
                  :
                    <button type='button' className='p-2 bg-blue-600 text-white' onClick={handleClick}>Submit</button>
              }
              </div>
            </div>
          </div>
        </div>
      </form>
<div className="container mt-20">
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
               
                <th className="border border-gray-300 px-4 py-2 text-left">SRNO</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Category Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">ProductName</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Images</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {
                  productData&& productData.map((index,i)=>(
                    <tr key={i}>
                     <td className="border border-gray-300 px-4 py-2">{i+1}</td>
                      <td className="border border-gray-300 px-4 py-2">{index.cname?.cname}</td>
                     
                     <td className="border border-gray-300 px-4 py-2">{index.pname}</td>
                   <td className="border border-gray-300 px-4 py-2">{index.price}</td>
                <td className="border border-gray-300 px-4 py-2 ">
         <img src={"http://localhost:3000/"+index.pimage ??"" } alt="" height={"100px"} width={"100px"} />
                    </td>
                  <td className="border border-gray-300 px-4 py-2">{index.description}</td>
                    <td>
                   <button type='button' className='p-3 bg-red-500 text-white' onClick={() => {
                                dispatch(deleteProduct(index.id));  }}>
                              <i className="fa-solid fa-trash"></i>
                            </button>
                    <button type='button' className='p-3 bg-green-500 ms-2 text-white' onClick={() => {
                                setEid(index.id);
                                dispatch(getProductById(index.id))}}>
                              <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                                   </td>
      </tr>
   ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     
  )
}

export default Product