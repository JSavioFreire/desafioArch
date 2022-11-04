import styled,{ createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    :root{
        --colorBack:#222222;
        --colorOrange:#D79D39;
        --colorLight:#C3C3C3;
        --colorShadow:#28282850;
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
`

export const Eighty = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`