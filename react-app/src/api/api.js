import { useState, useEffect,createContext } from "react";

export const ApiContext = createContext()

export function ApiContextProvider({children}){

    const [store, setStore] = useState([]);
    const [eachCategory, setEachCategory] = useState('all');

    useEffect(()=>{
        fetchStore()
    },[]);
  
    const fetchStore = ()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(api => setStore(api))
  }

    return(
        <ApiContext.Provider  value={{store, setEachCategory, eachCategory}}>
            {children}
        </ApiContext.Provider>

    )


}

