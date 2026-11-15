import { configureStore } from "@reduxjs/toolkit";
import cartOper from "./CartSlice"
export default configureStore({reducer:{cart:cartOper}})