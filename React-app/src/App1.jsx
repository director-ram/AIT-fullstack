import React from "react";
// import ApiCart from "./ApiCart";


let ApiCart = React.lazy(()=>import('./ApiCart'))
export default function App1() {
    return (
        <div>
            <ApiCart/>
        </div>
    )
}
