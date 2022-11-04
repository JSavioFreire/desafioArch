import Header from "./header/header";
import Categories from "./categories/categories";
import Banner from "./banner/banner";
import Product from "./products/product";

import StyleGlobal from './styleGlobal';


export default function App() {
      
  return (
    <>
      <StyleGlobal/>
      <Header/>
      <Categories/>
      <Banner/>
      <Product/>
    </>
  );
}

