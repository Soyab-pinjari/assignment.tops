import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./Category";
import ProductRedcuer from "./Product";
import UserReducer from "./register";


export const store = configureStore({
  reducer: {
  'category':CategoryReducer,
  'product':ProductRedcuer,
  'users':UserReducer
  },
});




