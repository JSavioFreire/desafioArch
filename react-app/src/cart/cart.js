import { TiShoppingCart} from 'react-icons/ti';
import { CartBox, CartAll, MyCart, TextCart,Close } from './styleCart';
import { Eighty } from '../styleGlobal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';


export default function Cart(){

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
                        My Shopping Cart is <strong>Empty</strong>
                    </TextCart>
                </Eighty>
            </CartAll>
        </>
    )
}