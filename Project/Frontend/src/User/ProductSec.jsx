import React, { useContext, useEffect, useMemo, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/Product';
import axios from 'axios';
import { CategoryContext } from '../context/CategoryContext';

function ProductSec() {
   const [productArray, setProductArray] = useState([])

  const { catname, setCatName } = useContext(CategoryContext)
  const getProductData = async () => {
    try {
       let token = localStorage.getItem('token');
            console.log(token);
     let res = await axios.get('http://localhost:3000/admin/product', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
      if (res) {
        setProductArray(res.data)
        
      }
      console.log("get responce",res.data);
    } catch (error) {
      console.log(error);
      
    }
  }
    console.log("product array",productArray);
    console.log("cat name =",catname);
 const FilterProduct = useMemo(() => {
    let newArray;
    if (catname != '') {
      newArray = productArray.filter((index, i) => {
        if (index.cname == catname) {
          
          return index
        }
      })

    }
    else {

      newArray = productArray
    }
    return newArray
    console.log("new array",newArray);
  }, [catname, productArray])

// console.log("FilterProduct", FilterProduct);
// console.log("productArray", productArray);
// console.log("catname", catname);
// console.log("product cname", productArray[0]?.cname);
   const addinCart = async(pid) => {
    if(!cUser){
       alert("Please Login first")
         navigate('/login')
     }
    
    
      try {
            let res = await axios.post('http://localhost:3000/addtocart',{pid:pid,uid:cUser.userId},
              {
                 headers: {
                    Authorization: `Bearer ${cUser.token}`
                }
              }
            );
           if(res.data.flag==1){
              alert("Product added")
           }
            
        } catch (error) {
            console.log(error);
            
        }
    
  }

  useEffect(()=>{
    getProductData();
  },[])

  return (
    <div>
      <section
        id="catalog"
        className="max-w-7xl mx-auto px-4 py-16"
      >

        <h3 className="text-3xl font-semibold mb-8 text-center">
          Product Catalog
        </h3>
        {/* Loading */}
{/* 
        {
          isloading && (
            <h2 className="text-center text-xl">
              Loading...
            </h2>
          )
        }
        {/* Error */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {
            FilterProduct && FilterProduct.map((index, i) => (
              <div class="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg">
                <img src={"http://localhost:3000/"+index.pimage} class="w-100 h-48 object-cover" />
                <div class="p-4">
                  <h4 class="font-semibold text-lg">{index.pname}</h4>
                  <p class="text-gray-600">{index.price}</p>
                  <button class="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700" onClick={() => {
                    addinCart(index.id)
                  }}>Add to Cart</button>

                </div>

              </div>

            ))
          }

        </div>

      </section>

    </div>
  );
}

export default ProductSec;