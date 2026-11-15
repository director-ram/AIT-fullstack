import { useCallback } from "react"
import { useEffect } from "react"
import { useState } from "react"

export const useLocalUser = ()=>{
    let [localUser,setLocalUser] =useState([])
    const storageKey = "UserDetails"

    useEffect(()=>{
        let storedValue  = JSON.parse(localStorage.getItem(storageKey)) || [];
        function getData(){
            setLocalUser(storedValue)
        }
        getData()
    },[])

    useEffect(()=>{
        localStorage.setItem(storageKey,JSON.stringify(localUser))
    },[localUser])
    
    let addUser = useCallback((user)=>setLocalUser(prev=>[{...user,id:Date.now()},...prev]),[])
    let deleteUser = useCallback((user)=>setLocalUser(prev=>prev.filter((person)=> person.id !== user.id)),[])
    let editUser = useCallback((user,update)=>setLocalUser(prev=>prev.map(person=>person.id == user ? {...person,...update}:person)),[])
    return {localUser,addUser,deleteUser,editUser}
}