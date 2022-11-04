import React from "react";
import { H1,Each,Flex } from "./styleProduct";
import { Eighty } from "../styleGlobal";

import EachProduct from "./eachProduct";
import { useState } from "react";
import { useEffect } from "react";

export default function Product(){

    const [store, setStore] = useState([]);

    useEffect(()=>{
        fetchStore();
    },[])

    const fetchStore = ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(api => setStore(api))
    }

   //console.log(store)

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
                                <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                            </Each>  
                            </>
                        )
                    })}
                         
                     
                </Flex>
            </Eighty>


        </>
    )
}