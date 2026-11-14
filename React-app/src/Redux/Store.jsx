import { configureStore } from "@reduxjs/toolkit";
import countOperation from './CounterSlice'
export default configureStore({reducer:{count:countOperation}})