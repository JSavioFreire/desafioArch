import { ImgEach,Title,About,Value } from "./styleProduct";

export default function EachProduct(props){

    return(
        <>
            <ImgEach></ImgEach>
            <About>
                <Title>{props.name}</Title>
                <Value>$ {props.price},00</Value>
            </About>
        </>
    )
}