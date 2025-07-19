import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
   
    // Create a state to represent input (parsed) data
    const [state, setState] = useState(data)

    // Get the value of localStorage data
    const data = localStorage.getItem(key)
    // If found, return that data
    if (data !== null) return data
    // otherwise return initialValue (null)
    else return initialValue

    // useEffect to update `localStorage` on value/key change of the user
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state)); // call the setItem method to set values in the local storage
    }, [key, state]); //dependency array includes both `key` and `state`

    // Return state and setter function
    return [key, state]    
}