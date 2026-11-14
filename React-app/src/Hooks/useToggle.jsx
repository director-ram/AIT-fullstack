import { useState } from "react"

export const useToggle = (key,color)=>{

    let [theme,setTheme] = useState(localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)):color)

    function updatedTheme(value){
        setTheme(value)
        localStorage.setItem(key,JSON.stringify(value))
    }


    return [theme, updatedTheme]
}