import { ImgEach,Title,About,Value,Description,FlexRow,Button } from "./styleProduct";

export default function EachProduct(props){

    return(
        <>
            <ImgEach src={props.image}/>
            <About>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
                <FlexRow>
                    <Button>Add to cart</Button>
                    <Value>$ {props.price}</Value>
                </FlexRow>
            </About>
        </>
    )
}