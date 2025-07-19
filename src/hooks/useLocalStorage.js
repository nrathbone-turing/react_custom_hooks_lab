import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
   
    // TODO: Consider lazy initialization with useState(() => ...) to improve performance slightly.
    // See: https://react.dev/reference/react/useState#lazy-initialization

    // Future Refactor Note: Assumes data stored in localStorage is plain string (not JSON).
    // If storing objects later, wrap in JSON.parse().
    let data = localStorage.getItem(key);
    
    // Get the value of localStorage data if it's not null
    if (data !== null) {
        data
    } else {
        // otherwise return initialValue
        data = initialValue;
    }

    // then create/initialize a state to represent the input data
    const [state, setState] = useState(data)

    // useEffect to update `localStorage` on value/key change of the user
    useEffect(() => {
        
        // RefactorNote: Currently storing only strings. If supporting complex data later,
        // re-enable JSON.stringify here and JSON.parse above for safety.
        localStorage.setItem(key, state); // call the setItem method to set values in the local storage
    }, [key, state]); //dependency array includes both `key` and `state`

    // Return state and setter function
    return [state, setState]    
}