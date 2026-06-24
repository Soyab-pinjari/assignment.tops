import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategory,
  deleteCategory,
  getCatById,
  getCategory,
  updateCategory
} from '../Redux/Category';
import axios from 'axios';


function Category() {
  const {catMsg ,singleCat,catError,isloading,catArray} = useSelector((state) => state.category);
const [cat, setCat] = useState({
  cname: "",
  cimage: null
});

const [msg,setMsg]=useState('');
const dispatch = useDispatch();
const [cid,setCid]=useState(null);
  
// text input
const handleChange = (e) => {
  setCat({
    ...cat,
    [e.target.name]: e.target.value
  });
};
const [categories, setCategories] = useState([]);

console.log("categories",categories);

const checkAuth = async () => {
        try {
              let token = localStorage.getItem('token');
            console.log("category",token);
            let res = await axios.get('http://localhost:3000/admin/category', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }


const handleFile = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please upload image file");
    return;
  }

  setCat({
    ...cat,
    cimage: file
  });

  console.log("Selected File:", file);
};

// submit
const handleClick = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
   const token = localStorage.getItem('token');

console.log(token);
    if(!token){
      console.log("token not provided");
    }
    formData.append("cname", cat.cname);
    formData.append("cimage", cat.cimage);

    const res = await axios.post(
      "http://localhost:3000/admin/category/create",
      formData
    );

    console.log("response",res);
    setMsg(res.data.message);
    setCat({
      cname: "",
      cimage: null
    });

  } catch (err) {
   setMsg(err.response?.data?.message);

  }
};
  // ================= UPDATE CATEGORY =================
  const handleUpdate = (e) => {

    
    e.preventDefault();

    const obj = {
      cid: cid,
      data: cat
    };

    dispatch(updateCategory(obj));

    setCid(null);

  setCat({
  cname: "",
  cimage: null
});
  };
const getCategory = async () => {
   let token = localStorage.getItem('token');
            console.log("category",token);
            let res = await axios.get('http://localhost:3000/admin/category', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
   setCategories(res.data.catdata);
   console.log("daddsdda",categories);
};


 const deleteCategory = async(id)=>{
     try {
          let res = await axios.delete('http://localhost:3000/admin/category/'+id);
          if(res){
              alert('data deleted ')
            
          }
      } catch (error) {
          console.log(error);
          
      }
  }
  // ================= GET CATEGORY =================

  useEffect(() => {

    getCategory();
    checkAuth();
  }, []);

  
  // ================= EDIT CATEGORY =================

  // useEffect(() => {

  //   if (singleCat) {

  //     setCat(singleCat);
  //   }

  // }, [singleCat]);

  return (
    <div className="p-5">

      <h2 className="text-3xl font-bold mb-10">
        Add Category
      </h2>

      <h1>{msg}</h1>

      {/* ================= FORM ================= */}

      <form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Category Name */}

          <div>

            <label
              htmlFor="cname"
              className="block mb-2 font-medium"
            >
              Category Name
            </label>

            <input
              id="cname"
              type="text"
              name="cname"
              value={cat.cname || ""}
              autoComplete="off"
              placeholder="Enter category name"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />

          </div>
          {/* Category Image */}

          <div>

            <label
              htmlFor="cimage"
              className="block mb-2 font-medium"
            >
              Category Image
            </label>

            <input
              id="cimage"
              type="file"
              name="cimage"
                accept="image/*"
                
              className="w-full border p-2 rounded"
              onChange={handleFile}
            />

          </div>
          {/* Button */}

          <div className="flex items-end">
            { cid ? ( <button
                  className="bg-green-600 text-white px-5 py-2 rounded"
                  onClick={handleUpdate}
                >
                  Update
                </button>) : (<button type='button' className="bg-blue-600 text-white px-5 py-2 rounded" onClick={(e) => {
    console.log("clicked");
    handleClick(e);
  }}
  >
                  Submit
                </button>
              )
            }

          </div>

        </div>

      </form>



      {/* ================= MESSAGE ================= */}

      {
        catMsg && (
          <h2 className="text-green-600 mt-5">
            {catMsg}
          </h2>
        )
      }

      {
        catError && (
          <h2 className="text-red-600 mt-5">
            {catError}
          </h2>
        )
      }

      {
        isloading && (
          <h2 className="text-blue-600 mt-5">
            Loading...
          </h2>
        )
      }

      {/* ================= TABLE ================= */}

      <div className="overflow-x-auto mt-10">

        <table className="min-w-full border border-gray-300">

          <thead className="bg-gray-100">

            <tr>

              <th className="border px-4 py-2">
                SRNO
              </th>

              <th className="border px-4 py-2">
                Category Name
              </th>

              <th className="border px-4 py-2">
                Image
              </th>

              <th className="border px-4 py-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>

            {
              Array.isArray(catArray) &&
              categories.map((item, i) => (

                <tr key={item.id || i}>

                  <td className="border px-4 py-2">
                    {i + 1}
                  </td>

                  <td className="border px-4 py-2">
                    {item.cname}
                  </td>

                  <td className="border px-4 py-2">

                   <img
                    src={`http://localhost:3000/${item.cimage}`}
                    alt={item.cname}
                    width="100"
                    height="100"
                    className="rounded"
                  />
                 </td>

                  <td className="border px-4 py-2 space-x-2">

                    <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                     onClick={()=>{
                     deleteCategory(item._id)
                    }}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded"
                      onClick={() => {
                        setCid(item.id);
                        dispatch(getCatById(item.id));
                      }}
                    >
                      Edit
                    </button>

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}
export default Category;