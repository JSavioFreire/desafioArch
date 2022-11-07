import Header from "./header/header";
import Category from "./category/category";
import Product from "./products/product";
import StyleGlobal from './styleGlobal';
import { ButDark,ButLight,But } from "./theme/changeTheme";
import { ApiContextProvider } from "./api/api";

import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { useState } from "react";

export default function App() {
      
const [theme, setTheme] = useState(false) 

  return (
    <ApiContextProvider>
      <ThemeProvider theme={theme?lightTheme:darkTheme}>
        <StyleGlobal/>
        <Header/>
        <Category/>
        <But>
          <ButLight onClick={()=>{setTheme(true)}}>LightMode</ButLight>
          <ButDark onClick={()=>{setTheme(false)}}>DarkMode</ButDark>
        </But>
        <Product/>
      </ThemeProvider>
    </ApiContextProvider>
  );
}

