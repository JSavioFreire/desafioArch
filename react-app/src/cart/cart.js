import { TiShoppingCart} from 'react-icons/ti';
import { CartBox, CartAll, MyCart, TextCart,Close } from './styleCart';
import EachCard from './eachCart.js';
import { Eighty } from '../styleGlobal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { ApiContext } from "../api/api";


export default function Cart(){

    const { names, image, value} = useContext(ApiContext);
    const [cartOpen, setOpen] = useState(false)

    return(
        <>
            <CartBox onClick={()=>{setOpen(true)}}>
                <TiShoppingCart/>
            </CartBox>

            <CartAll className={cartOpen? 'openCart' : ''}>
                <Eighty>
                    <Close onClick={()=>{setOpen(false)}}>
                        <AiFillCloseCircle/>
                    </Close>
                    <MyCart>
                        My Cart
                    </MyCart>
                        <TextCart>
                            <EachCard name = {names[0]} image = {image[0]} value = {value[0]}/>
                            <EachCard name = {names[1]} image = {image[1]} value = {value[1]}/>
                            <EachCard name = {names[2]} image = {image[2]} value = {value[2]}/>
                            <EachCard name = {names[3]} image = {image[3]} value = {value[3]}/>
                            <EachCard name = {names[4]} image = {image[4]} value = {value[4]}/>
                            <EachCard name = {names[5]} image = {image[5]} value = {value[5]}/>
                            <EachCard name = {names[6]} image = {image[6]} value = {value[6]}/>
                            <EachCard name = {names[7]} image = {image[7]} value = {value[7]}/>
                            <EachCard name = {names[8]} image = {image[8]} value = {value[8]}/>
                            <EachCard name = {names[9]} image = {image[9]} value = {value[9]}/>

                            
                            
                        </TextCart>
                </Eighty>
            </CartAll>
        </>
    )
}