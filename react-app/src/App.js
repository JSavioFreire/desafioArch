import Header from "./header/header";
import Category from "./category/category";
import Product from "./products/product";
import DarkMode from "./dark/dark";
import StyleGlobal from './styleGlobal';
import { ApiContextProvider } from "./api/api";

export default function App() {
      
  

  return (
    <ApiContextProvider>
      <StyleGlobal/>
      <Header/>
      <Category/>
      <Product/>
      <DarkMode/>
    </ApiContextProvider>
  );
}

