import React from "react";
import { Each,Flex } from "./styleProduct";
import { Eighty } from "../styleGlobal";

import EachProduct from "./eachProduct";
import AddProduct from "./addProduct";
import { useContext } from "react";
import { ApiContext } from "../api/api";

export default function Product(){

const {store, eachCategory} = useContext(ApiContext);

    return(
        <>
            

            <Eighty>
                <Flex>
                    {store.map((values)=>{
                        if(eachCategory === 'men'){
                            if(values.category === "men's clothing"){
                                return(                                    
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description} id={values.id}/>
                                    </Each>                                     
                                )
                        }}                             
                        else if(eachCategory === 'electronics'){
                            if(values.category === "electronics"){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description} id={values.id}/>
                                    </Each>     
                                )
                        }}
                        else if(eachCategory === 'women'){
                            if(values.category === "women's clothing"){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description} id={values.id}/>
                                    </Each>      
                                )
                        }}
                        else{
                            if(values.category === "women's clothing" || values.category === "electronics" || values.category === "men's clothing" ){
                                return(
                                    <Each>
                                        <EachProduct image = {values.image} name = {values.title} price = {values.price} description = {values.description} id={values.id}/>
                                    </Each>  
                                )
                        }}  
                    })}     
                    <Each>
                        <AddProduct/>
                    </Each>
                </Flex>
            </Eighty>
        
        </>
    )
}