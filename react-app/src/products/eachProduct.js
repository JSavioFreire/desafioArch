import { ImgEach,Title,About,Value,Description,FlexRow,Button } from "./styleProduct";

export default function EachProduct(props){
    const toCart = ()=>{
        const title = props.name;
        const img = props.image;
        const value = props.price;

        console.log(title, img, value)
    }

    return(
        <>
            <ImgEach src={props.image}/>
            <About>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
                <FlexRow>
                    <Button onClick={()=> toCart()}>Add to cart</Button>
                    <Value>$ {props.price}</Value>
                </FlexRow>
            </About>
        </>
    )
}