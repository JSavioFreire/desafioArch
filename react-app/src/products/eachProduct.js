import { ImgEach,Title,About,Value,Description } from "./styleProduct";

export default function EachProduct(props){

    return(
        <>
            <ImgEach src={props.image}/>
            <About>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
                <Value>$ {props.price}</Value>
            </About>
        </>
    )
}