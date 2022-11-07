import styled from "styled-components";

export const CartBox = styled.div`
    font-size: 35px;
    color: white;
    position: absolute;
    right: 20px;
    cursor: pointer;
`
export const CartAll = styled.div`
    width: 90%;
    right: -100%;
    top: 0;
    height: 100vh;
    position: fixed;
    transition: 1s;
    display: block;
    background-color: var(        --colorLight);
    transition: 1s;
    display: block;
    color: var(--colorBack);

  
`
export const MyCart = styled.h1`
    font-size: 25px;
    margin-left: -20px;
`
export const TextCart = styled.div`
    width: 80%;
    height: 300px;
    
`
export const Close = styled.div`
    font-size: 40px;
    color: black;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;


`
export const EachCar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    min-height: 0;
`
export const Img = styled.img`
    width: 10%;
    max-height: 50px;
`
export const Text = styled.h2`
    width: 70%;
    font-size: 16px;
    
`
export const Value = styled.h1`
    width: 70%;
    margin-top: -20px;
`
export const Flex = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
