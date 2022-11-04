import React from "react";
import { H1,Each,Flex } from "./styleProduct";
import { Eighty } from "../styleGlobal";

import EachProduct from "./eachProduct";
import { useState } from "react";
import { useEffect } from "react";

export default function Product(){

    const [store, setStore] = useState([]);

    console.log(store);

    useEffect(()=>{
        fetchStore();
    },[])

    const fetchStore = ()=>{
        fetch('https://api.storerestapi.com/products')
        .then(response => response.json())
        .then(api => setStore(api.data))
    }
   

    return(
        <>
            <H1>
                Products
            </H1>

            <Eighty>
                <Flex>
                    {store.map((values)=>{
                        return(
                            <>
                            <Each>
                                <EachProduct name = {values.title} price = {values.price}/>
                            </Each>  
                            </>
                        )
                    })}
                         
                     
                </Flex>
            </Eighty>


        </>
    )
}