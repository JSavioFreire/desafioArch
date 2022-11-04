import { All,Logo } from "./styleHeader";

import logo from '../img/logo.png';

export default function Header(){

    return(
        <All className='content'>
            <Logo src={logo} />
        </All>
    )
}