import styled from "styled-components";

export const Menu = styled.div`
    font-size: 35px;
    color: white;
    position: absolute;
    left: 20px;
    display: none;
    cursor: pointer;
    z-index: 1;
    
    @media (max-width: 768px) {
    display: block;
  }
`

export const BoxMenu = styled.div`
    width: 50%;
    left: 0;
    top: 0;
    height: 100vh;
    background-color: var(--colorBack);
    position: fixed;
    padding-top: 30%;
    padding-left: 10px;
    transition: 1s;
`
export const EachCMobile = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: 0.3s;
    cursor: pointer;
    display: block;
    margin-bottom: 20px;

    
   

    :hover{
        color: var(--colorOrange);
    }
`