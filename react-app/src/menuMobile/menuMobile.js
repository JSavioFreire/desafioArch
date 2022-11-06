import Hamburger from 'hamburger-react'
import { useContext } from "react";
import { ApiContext } from "../api/api";
import { Menu, BoxMenu,EachCMobile } from './styledMenuMobile';
import { useState } from 'react';


export default function MenuMobile(){

    const {setEachCategory, eachCategory} = useContext(ApiContext);
    const [isOpen, setOpen] = useState(false);
    
    return(
        <>
            <Menu>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </Menu>

            <BoxMenu className={isOpen?'':'close'}>
            <EachCMobile onClick={() => setEachCategory('all')} className={eachCategory === 'all' ? 'color':''} >All Products</EachCMobile>
            <EachCMobile onClick={() => setEachCategory('men')} className={eachCategory === 'men' ? 'color':''}>Men's clothing</EachCMobile>
            <EachCMobile onClick={() => setEachCategory('electronics')} className={eachCategory === 'electronics' ? 'color':''}>Electronics</EachCMobile>
            <EachCMobile onClick={() => setEachCategory('women')} className={eachCategory === 'women' ? 'color':''}>Women's clothing</EachCMobile>
            </BoxMenu>
        </>

    )

}