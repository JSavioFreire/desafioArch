import { useEffect, useState, createContext } from "react";
import { ImgEach,Title,About,Value,Description,FlexRow,Button } from "./styleProduct";

export default function EachProduct(props){
    
    const [inside, setInside] = useState(false)

    const turnToInside = ()=>{
        setInside(true);
    }
    useEffect(()=>{
        if(inside == true){
            const name = props.name;
            const image = props.image;
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