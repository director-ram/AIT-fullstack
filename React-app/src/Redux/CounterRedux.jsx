import { useDispatch, useSelector } from "react-redux"
import {INC,DEC,RES} from './CounterSlice'
export const CounterRedux = ()=>{
    let counter = useSelector(state=>state.count)
    let dispatch = useDispatch()
    return(
    <>
    <center>
        <h2>Counter REDUX: <b className="text-danger m-2">{counter}</b></h2>
        <button className="btn btn-success m-2" onClick={()=>dispatch(INC())}>INC</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch(DEC())}>DEC</button>
        <button className="btn btn-secondary m-2" onClick={()=>dispatch(RES())}>RES</button>
        </center>
    </>
    )
}

// Redux is a predictable state-management library that stores application state
// in one central store and updates it through dispatched actions and reducers.

// Redux hooks:
// useSelector reads data from the Redux store.
// useDispatch sends actions to update the Redux store.