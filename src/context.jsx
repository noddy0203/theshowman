

import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const AppContext = createContext()


const api  = "https://mocki.io/v1/72cc93b8-f651-43cf-8304-36d0c65cb4d7 ";

const initialState = {
    name: "",
    image: "",
    services: []
}



const AppProvider = ({ children }) => {

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "THE SHOWMAN Co.",
                image: "./images/hero_usplash.jpg"
            }
        })
    }
    
    const updateAboutPage = ()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"AYUSH SONI",
                image:"./images/about_unsplash.jpg"
            }
        })
    }

// fetching api
const getServices = async (url)=>{
      try {
        const res = await fetch(url);
        const data = await res.json();
        dispatch({type:"GET_SERVICES" , payload:data})
      } catch (error) {
        console.log(error)
      }
}
// calling api through useEffect
useEffect(()=>{
     getServices(api)
}, [])


    // using useReducer
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{ ...state , updateAboutPage , updateHomePage }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { useGlobalContext, AppProvider }

