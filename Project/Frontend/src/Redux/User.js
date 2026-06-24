import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { db } from "/src/firebase.js";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

export const userRegistration = createAsyncThunk('userRegistration' , async(data)=>{
    try{
        const doc= collection(db,'user')
        const res = await addDoc(doc,data);
      const result={
        msg:"user added",
      }
      return result;
    }catch(error){
        return error;
    }
})
export const logout = createAsyncThunk('logout',async()=>{
         try {
            return true;
         } catch (error) {
             
         }
})
export const userLogin = createAsyncThunk(
  'userLogin',
  async (loginUser, { rejectWithValue }) => {

    try {

      const docref = collection(db, 'user');

      const q = query(
        docref,
        where('email', '==', loginUser.email),
        where('password', '==', loginUser.password)
      );

      console.log(loginUser);

      const querySnapshot = await getDocs(q);

      console.log("EMPTY :", querySnapshot.empty);

      let user = null;

      querySnapshot.forEach((doc) => {

        console.log(doc.data());

        user = {
          ...doc.data(),
          id: doc.id,
        };

      });

      console.log(querySnapshot.docs);

      if (!user) {

        return rejectWithValue("Invalid Email or Password");

      }

      localStorage.setItem(
        'loggedUser',
        JSON.stringify(user)
      );

      return {
        msg: "Successfully login",
        userInfo: user
      };

    } catch (error) {

      console.log(error);

      return rejectWithValue(error.message);

    }

  }
);

export const  UserSlice=createSlice({
    name:'users',
    initialState:{
        singleUser:{},
        userError:null,
        isLoading:false,
        userMsg:'',
        islogged:false
        
    } 
    ,
    reducers:{
          clearMsg: (state) => {
            state.userMsg = null;
        }
    },

    extraReducers:(builder)=>{
builder.addCase(userRegistration.pending, (state, action) => {
            state.isLoading = true;
        })
            .addCase(userRegistration.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userMsg = action.payload.msg;
                console.log(state.userMsg);
                
            })
            .addCase(userRegistration.rejected, (state, action) => {
                state.userError = action.payload
            })
            .addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
        })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.userMsg = action.payload.msg;
                state.singleUser = action.payload.userInfo
                state.islogged=true
            })
            .addCase(userLogin.rejected, (state, action) => {
    state.isLoading = false;
    state.userError = action.payload;
})
           .addCase(logout.fulfilled,(state,action)=>{
    state.islogged = false;
    state.singleUser = {};
})
    }
})

export const { clearMsg } = UserSlice.actions;
const UserReducer=UserSlice.reducer
export default UserReducer