import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

export const UserRegistration = createAsyncThunk(
  'users/registerUser',
  async (data, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'user'), data);

      return {
        msg: "User registered successfully",
        id: docRef.id
      };

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    singleUser: {},
    userError: null,
    isLoading: false,
    userMsg: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserRegistration.pending, (state) => {
        state.isLoading = true;
        state.userMsg = '';
      })

      .addCase(UserRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userMsg = action.payload.msg;
        state.singleUser = action.payload;
      })

      .addCase(UserRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.userError = action.payload;
      });
  },
});

export default userSlice.reducer;