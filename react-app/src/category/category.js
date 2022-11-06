import { StyleAll, EachC } from "./styleCategories";
import { useContext } from "react";
import { ApiContext } from "../api/api";

export default function Category(){

    const {setEachCategory, eachCategory} = useContext(ApiContext);
return(
    <StyleAll>
        <EachC onClick={() => setEachCategory('all')} className={eachCategory === 'all' ? 'color':''}>All Products</EachC>
        <EachC onClick={() => setEachCategory('men')} className={eachCategory === 'men' ? 'color':''}>Men's clothing</EachC>
        <EachC onClick={() => setEachCategory('electronics')} className={eachCategory === 'electronics' ? 'color':''}>Electronics</EachC>
        <EachC onClick={() => setEachCategory('women')} className={eachCategory === 'women' ? 'color':''}>Women's clothing</EachC>
    </StyleAll>
)
}
        
        
        