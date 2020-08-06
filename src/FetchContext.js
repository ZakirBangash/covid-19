import React, { useState, createContext, useEffect } from 'react';

 export const apiContext = createContext();



export const ApiProvider = (props) => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            

            let url = 'https://covid19.mathdro.id/api';


            try {
                const response = await fetch(url);
                const { confirmed, deaths, recovered } = await response.json();
                const modifyData = {
                    confirmed,
                    deaths,
                    recovered
                }
                console.log(modifyData)
                setstate(modifyData);
                console.log(modifyData)
            } catch (error) {
                console.log(error)
            }


        }
            FetchData();
        
    }, [state])



    return (
        <apiContext.Provider value={[state,setstate]}>
                {props.children}

        </apiContext.Provider>
    )
}
