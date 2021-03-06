import  { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue)
    useEffect(()=>{
        console.log(values)
        if(values === true){
            document.body.classList.add("dark-mode")
        }else{
            document.body.classList.remove("dark-mode")
        }
    },[values])

    return[values, setValues]
}