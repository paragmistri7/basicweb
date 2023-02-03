import React, { createContext, useState } from 'react';
import App from '../App';

export const contextdata = createContext()
const Stepcontext = () => {
    const [data, setdata] = useState(1)
    const [update, setupdate] = useState([])
    const [final , setfinal] = useState([])

    

    const submitted = (e) => {
        // e.preventDefault()
        setfinal(final => [...final, update])
        setupdate(" ")
        setdata (1)
    }

    return (
        <>
            <contextdata.Provider value={{data,setdata ,update ,setupdate , final , setfinal ,submitted}}>
                  <App/>
            </contextdata.Provider>
        </>
    );
};

export default Stepcontext ;