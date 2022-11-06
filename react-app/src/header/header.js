import { All,Logo,Menu } from "./styleHeader";
import { TiShoppingCart} from 'react-icons/ti';
import MenuMobile from "../menuMobile/menuMobile";
import { Cart } from "./styleHeader";

import logo from '../img/logo.png';

export default function Header(){

    return(
        <All className='content'>
            <MenuMobile/>
            <Logo src={logo} />
            <Cart>
                <TiShoppingCart/>
            </Cart>
        </All>
    )
}