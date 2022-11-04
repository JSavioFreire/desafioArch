import styled from "styled-components";

export const BanneraAll = styled.div`
    width: 100%;
    height: calc(100vh - 130px);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SubCarousel = styled.div`
    width: 60%;
    height: 400px;
    box-shadow: 5px 5px 15px var(--colorShadow);
    cursor: grab;
`
export const Boxes = styled.div`
    width: 30%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`
export const Box = styled.div`
    width: 250px;
    height: 100px;
    background-color: white;
    box-shadow: 5px 5px 15px var(--colorShadow);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const Icon = styled.div`
    font-size: 75px;
    margin-top: 20px;
    color: var(--colorBack);
`
export const P = styled.p`
    color: var(--colorBack);
    font-size: 17px;
    width: 50%;
`