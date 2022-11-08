import { useState } from "react"
import { Add,Input,InputBt } from "./styleProduct"
import EachProduct from "./eachProduct"

export default function AddProduct(){

    const inputsValue = document.querySelectorAll('.input');

    const [add, setAdd] = useState('btAddScreen')
    const addNewProduct = ()=>{
        setAdd('addScreen')
    }

    const verificarInputs = ()=>{
        setAdd('productAdd')
       
    }



    if(add == 'btAddScreen'){
        return(
            <Add onClick={addNewProduct}>
                +
            </Add>
            )
    }
    else if(add == 'addScreen'){
        return(
            <>
            <Input placeholder="Product's Name" className="input"/>
            <Input placeholder="Product's Price" className="input"/>
            <Input placeholder="Product's Image Link" className="input"/>
            <Input placeholder="Product's Description" className="input"/>
            <Input placeholder="Product's Category" className="input"/>
            <InputBt type='submit' value='Add to ArchStore' onClick={verificarInputs}/>
            </>
            
        )
    }
    else if(add == 'productAdd')
    inputsValue.forEach((el,index) => {
        console.log(inputsValue[index].value)
    });
    return(
        <>
            <EachProduct image = {inputsValue[2].value} name = {inputsValue[0].value} price = {inputsValue[1].value} description = {inputsValue[3].value}/>
        </>
    )
}