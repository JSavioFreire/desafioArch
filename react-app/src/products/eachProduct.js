import { useEffect, useState, useContext } from "react";
import { ImgEach,Title,About,Value,Description,FlexRow,Button } from "./styleProduct";
import { ApiContext } from "../api/api";

export default function EachProduct(props){
    
    const { names, image,value} = useContext(ApiContext);
    const [inside, setInside] = useState(false);

    const turnToInside = ()=>{
        setInside(true);
    }
    useEffect(()=>{
        if(inside == true){

            names.push(props.name)
            image.push(props.image)
            value.push(props.price)
            console.log(names, image, value);
            
        }
        
    })

    return(
        <>
            <ImgEach src={props.image}/>
            <About>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
                <FlexRow>
                    <Button onClick={turnToInside}>Add to cart</Button>
                    <Value>$ {props.price}</Value>
                </FlexRow>
            </About>
        </>
    )
}