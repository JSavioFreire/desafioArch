import React from "react";
import { Each,Flex } from "./styleProduct";
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

   const [eachCategory, setEachCategory] = useState('all')


    return(
        <>
            <StyleAll>
                <EachC onClick={() => setEachCategory('all')} className={eachCategory === 'all' ? 'color':''}>All Products</EachC>
                <EachC onClick={() => setEachCategory('men')} className={eachCategory === 'men' ? 'color':''}>Men's clothing</EachC>
                <EachC onClick={() => setEachCategory('electronics')} className={eachCategory === 'electronics' ? 'color':''}>Electronics</EachC>
                <EachC onClick={() => setEachCategory('women')} className={eachCategory === 'women' ? 'color':''}>Women's clothing</EachC>
            </StyleAll>
            <Eighty>
                <Flex>
                    {store.map((values)=>{
                        if(eachCategory === 'men'){
                            if(values.category === "men's clothing"){
                                return(                                    
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                                    </Each>                                     
                                )
                        }}                             
                        else if(eachCategory === 'electronics'){
                            if(values.category === "electronics"){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                                    </Each>     
                                )
                        }}
                        else if(eachCategory === 'women'){
                            if(values.category === "women's clothing"){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                                    </Each>      
                                )
                        }}
                        else{
                            if(values.category === "women's clothing" || values.category === "electronics" || values.category === "men's clothing" ){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description}/>
                                    </Each>  
                                )
                        }}  
                    })}     
                </Flex>
            </Eighty>
        
        </>
    )
}