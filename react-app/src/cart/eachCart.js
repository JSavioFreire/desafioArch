import { Img,Text,EachCar,Flex,Value } from "./styleCart"

export default function EachCard(props){
    
    return(
        
        <EachCar>
            <Img src={props.image}/>
            <Flex>
                <Text>
                    {props.name}
                </Text>    
                <Value>
                    {props.value}
                </Value>    
            </Flex>
                
        </EachCar>
    )
}