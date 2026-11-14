import { useReducer } from "react"

export const Reducer=()=>{
    // reducer
    // let [count,dispatch] = useReducer(reducerFunc,0)

    // function reducerFunc(state,action){
    //     switch(action.value){
    //         case 'INC':
    //             return state + action.payload
    //         case 'DEC':
    //             return state - action.payload
    //         case 'RES':
    //             return 0
    //     }
    // }


    let [setting,dispatch] = useReducer(reducerFunc,{
        sms:true,notification:false,push:true,
    })
    function reducerFunc(state,action){
        return{...state,[action]:!state[action]}
    }
    return(<>
    {/* <center>
        <h1>Count: {count}</h1>
        <button className="btn btn-success m-2" onClick={()=>dispatch({value:'INC',payload:10})}>INC</button>
        <button className="btn btn-warning m-2" onClick={()=>dispatch({value:'DEC',payload:5})}>DEC</button>
        <button className="btn btn-danger m-2" onClick={()=>dispatch({value:'RES',payload:0})}>RESET</button>
    </center> */}
    <center>
        <div className="container rounded bg-light m-5 p-5 w-50">
            <i className="m-3 p-2">check to enable the features</i><br/>
            <label htmlFor="" className="form-check-label">SMS</label>
            <input type="checkbox" className="form-check-input" checked={setting.sms} onClick={()=>dispatch('sms')}/><br/>
            <label htmlFor="" className="form-check-label">Notification</label>
            <input type="checkbox" className="form-check-input" checked={setting.notification} onClick={()=>dispatch('notification')}/><br/>
            <label htmlFor="" className="form-check-label">Push</label>
            <input type="checkbox" className="form-check-input" checked={setting.push} onClick={()=>dispatch('push')}/><br/>
        </div>
        <div className="container bg-dark text-light rounded w-30 p-5 m-3">
            <h3>SMS:{setting.sms ? "YES":"NO"}</h3>
            <h3>Notification: {setting.notification ? "YES":"NO"}</h3>
            <h3>Push: {setting.push ? "YES":"NO"}</h3>
        </div>
    </center>
    </>)
}

// useReducer manages complex state by updating it through actions
// and a reducer function.