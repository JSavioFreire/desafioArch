import React from "react";
import { Each,Flex,H1 } from "./styleProduct";
import { StyleAll, EachC } from "../products/styleCategories";
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

   

    return(
        <>
            <StyleAll>
                <EachC href="#">Men's clothing</EachC>
                <EachC href='#'>Jewelery</EachC>
                <EachC href='#'>Electronics</EachC>
                <EachC href='#'>Women's clothing</EachC>
            </StyleAll>
        <H1>All Products</H1>
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
        <H1>Men's clothing</H1>
                
            <Eighty>
                <Flex>
                    {store.map((values)=>{
                        console.log(values.category)

                        if(values.category == "men's clothing"){
                            return(
                            <>
                            <Each>
                                <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                            </Each>  
                            </>
                        )
                        }
                        else{
                            return(
                                <></>
                            )
                        }
                        

                    })}
                        
                </Flex>
            </Eighty>

        <H1>Men's clothing</H1>
            <Eighty>
                <Flex>
                    {store.map((values)=>{
                        console.log(values.category)

                        if(values.category == "men's clothing"){
                            return(
                            <>
                            <Each>
                                <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                            </Each>  
                            </>
                        )
                        }
                        else{
                            return(
                                <></>
                            )
                        }
                        

                    })}
                        
                </Flex>
            </Eighty>
            
        


        </>
    )
}