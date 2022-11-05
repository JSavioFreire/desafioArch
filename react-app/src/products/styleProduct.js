import styled from "styled-components";

export const H1 = styled.h1`
    width: 100%;
    height: 60px;
    background-color: var(--colorOrange);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--colorBack);
    margin-top: 0;
`
export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap;
`



//EachProduct

export const Each = styled.div`
    width: 30%;
    height: 420px;
    background-color: white;
    margin: 20px 10px;
    box-shadow: 5px 5px 15px var(--colorShadow);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    flex-direction: column;
    

`
export const ImgEach = styled.img`
    width: 30%;
    
`
export const About = styled.div`
    width: 100%;
    height: 50%;
`
export const Title = styled.h2`
    font-size: 17px;
    font-weight: 400;
    text-align: center;
    margin-top: 1px;
    text-transform: capitalize;



`
export const Description = styled.h2`
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
    height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;



`
export const Value = styled.h1`
    font-size: 28px;
    font-weight: 400;
    text-align: center;

`
export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-items: center;
    margin-top: -15px;

`
export const Button = styled.button`
    padding: 10px;
    background-color: var(--colorOrange);
    border-radius: 10px;
    cursor: pointer;
`