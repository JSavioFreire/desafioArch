import { All,Logo } from "./styleHeader";
import MenuMobile from "../menuMobile/menuMobile";
import Cart from "../cart/cart"

import logo from '../img/logo.png';

export default function Header(){

    return(
        <All className='content'>
            <MenuMobile/>
            <Logo src={logo} />
            <Cart/>
        </All>
    )
}