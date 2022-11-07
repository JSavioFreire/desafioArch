import { useState, useEffect,createContext } from "react";

export const ApiContext = createContext()

export function ApiContextProvider({children}){

    const [store, setStore] = useState([]);
    const [cart, setCart] = useState(false);
    const [eachCategory, setEachCategory] = useState('all');
    const names = [];
    const image = [];
    const value = [];

    useEffect(()=>{
        fetchStore()
    },[]);
  
    const fetchStore = ()=>{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(api => setStore(api))
  }

    return(
        <ApiContext.Provider value={{store, setEachCategory, eachCategory,cart,setCart,names,image,value}}>
            {children}
        </ApiContext.Provider>

    )


}

