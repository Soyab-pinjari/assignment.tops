import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import axios from "axios";
import { db } from "/src/firebase.js";

// ================= ADD CATEGORY =================

export const addCategory = createAsyncThunk(
  "addCategory",
  async (data, { rejectWithValue }) => {
    try {

      const colRef = collection(db, "category");

      await addDoc(colRef, data);

      return {
        msg: "Category Created",
      };

    } catch (error) {

      return rejectWithValue(error.message);

    }
  }
);

// ================= GET CATEGORY =================

export const getCategory = createAsyncThunk(
  "getCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/admin/category"
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// ================= DELETE CATEGORY =================

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (cid, { rejectWithValue }) => {
    try {

      const docRef = doc(db, "category", cid);

      await deleteDoc(docRef);

      return {
        msg: "Category Deleted",
      };

    } catch (error) {

      return rejectWithValue(error.message);

    }
  }
);



// ================= GET CATEGORY BY ID =================

export const getCatById = createAsyncThunk(
  "getCatById",
  async (cid, { rejectWithValue }) => {
    try {

      const docRef = doc(db, "category", cid);

      const res = await getDoc(docRef);

      return {
        ...res.data(),
        id: res.id,
      };

    } catch (error) {

      return rejectWithValue(error.message);

    }
  }
);



// ================= UPDATE CATEGORY =================

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async (obj, { rejectWithValue }) => {
    try {

      const docRef = doc(db, "category", obj.cid);

      await updateDoc(docRef, obj.data);

      return {
        msg: "Category Updated",
      };

    } catch (error) {

      return rejectWithValue(error.message);

    }
  }
);



// ================= SLICE =================

const CategorySlice = createSlice({
  name: "category",

  initialState: {
    singleCat: null,
    isloading: false,
    catArray: [],
    catMsg: null,
    catError: null,
  },

  reducers: {},

  extraReducers: (builder) => {

    // ===== ADD CATEGORY =====

    builder
      .addCase(addCategory.pending, (state) => {
        state.isloading = true;
      })

      .addCase(addCategory.fulfilled, (state, action) => {
        state.isloading = false;
        state.catMsg = action.payload.msg;
        state.catError = null;
      })

      .addCase(addCategory.rejected, (state, action) => {
        state.isloading = false;
        state.catError = action.payload;
      });



    // ===== GET CATEGORY =====

    builder
      .addCase(getCategory.pending, (state) => {
        state.isloading = true;
      })

      .addCase(getCategory.fulfilled, (state, action) => {
  state.isloading = false;
  state.catArray = action.payload.catdata;
  state.catError = null;
})
      .addCase(getCategory.rejected, (state, action) => {
        state.isloading = false;
        state.catError = action.payload;
      });



    // ===== DELETE CATEGORY =====

    builder
      .addCase(deleteCategory.pending, (state) => {
        state.isloading = true;
      })

      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isloading = false;
        state.catMsg = action.payload.msg;
        state.catError = null;
      })

      .addCase(deleteCategory.rejected, (state, action) => {
        state.isloading = false;
        state.catError = action.payload;
      });



    // ===== GET CATEGORY BY ID =====

    builder
      .addCase(getCatById.pending, (state) => {
        state.isloading = true;
      })

      .addCase(getCatById.fulfilled, (state, action) => {
        state.isloading = false;
        state.singleCat = action.payload;
        state.catError = null;
      })

      .addCase(getCatById.rejected, (state, action) => {
        state.isloading = false;
        state.catError = action.payload;
      });



    // ===== UPDATE CATEGORY =====

    builder
      .addCase(updateCategory.pending, (state) => {
        state.isloading = true;
      })

      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isloading = false;
        state.catMsg = action.payload.msg;
        state.catError = null;
      })

      .addCase(updateCategory.rejected, (state, action) => {
        state.isloading = false;
        state.catError = action.payload;
      });

  },
});

export default CategorySlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { collection, addDoc ,getDocs, deleteDoc ,doc} from "firebase/firestore";
// import { db, auth } from '/src/firebase.js';

// export const addCategory = createAsyncThunk(
//   'addCategory',
//   async (data, { rejectWithValue }) => {
//     try {
//       const docRef = collection(db, 'category');
//       const res = await addDoc(docRef, data);

//       return {
//         msg: "Category created",
//         id: res.id
//       };

//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getCategory = createAsyncThunk('getCategory',async()=>{
//     try {
//         const doc = collection(db,'category');
//         const snapShort = await getDocs(doc);
//         let arrayCat =[];
//         snapShort.forEach((doc)=>{
//             arrayCat.push({...doc.data(),id:doc.id})
//         })
//         console.log("catdata",arrayCat);
//         return arrayCat;
        
//     } catch (error) {
//     return rejectWithValue(error.message);
// }
// })

// export const deleteCategory = createAsyncThunk(
//   'deleteCategory',
//   async (cid, { rejectWithValue }) => {
//     try {
//         const docRef = doc(db, 'category', cid);

//       await deleteDoc(docRef);

//       return {
//         msg: "category deleted"
//       };

//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const CategorySlice = createSlice({
//   name: 'category',
//   initialState: {
//     singleCat: null,
//     isLoading: false,
//     catArray: [],
//     catMsg: null,
//     catError: null
//   },
//   reducers: {},
//   extraReducers(builder) {
//     builder
//       .addCase(addCategory.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(addCategory.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.catMsg = action.payload.msg;
//       })
//       .addCase(addCategory.rejected, (state, action) => {
//         state.isLoading = false;
//         state.catError = action.payload;
//       });
//        builder.addCase(getCategory.pending,(state,action)=>{
//               state.isLoading=true;
//         })
//         .addCase(getCategory.fulfilled,(state,action)=>{
//              state.isLoading=false;
//             state.catArray=action.payload;
//         })
//         .addCase(getCategory.rejected,(state,action)=>{
//             state.error=action.payload
//         })

//         .addCase(deleteCategory.pending,(state,action)=>{
//               state.isLoading=true;
//         })
//         .addCase(deleteCategory.fulfilled,(state,action)=>{
//              state.isLoading=false;
//             state.catArray=action.payload.msg;
//         })
//         .addCase(deleteCategory.rejected,(state,action)=>{
//             state.error=action.payload
//         })
//   }
// });

// export default CategorySlice.reducer;