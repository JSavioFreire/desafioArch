import { ImgEach,Title,About,Value,Description,Flex,Button,Button2 } from "./styleProduct";

export default function EachProduct(props){

    return(
        <>
            <ImgEach src={props.image}/>
            <About>
                <Title>{props.name}</Title>
                <Value>$ {props.price}</Value>
                <Flex>
                    <Button>More</Button>
                    <Button2>Add to cart</Button2>
                </Flex>
            </About>
        </>
    )
}