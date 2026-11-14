import {createSlice} from "@reduxjs/toolkit";

const CounterSlice = createSlice(
    {
        name:'count',
        initialState:0,
        reducers:{
            INC:(state,)=>state+1,
            DEC:(state)=>state-1,
            RES:()=>0,
        }
    }
)

export const {INC,DEC,RES} = CounterSlice.actions
export default CounterSlice.reducer