import styled from "styled-components";

export const BanneraAll = styled.div`
    width: 100%;
    height: calc(100vh - 130px);
    background-color: var(--colorLight);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const SubCarousel = styled.div`
    width: 60%;
    height: 400px;
    box-shadow: 2px 2px 5px var(--colorBack);
    cursor: grab;
`
export const Boxes = styled.div`
    width: 30%;
    height: 400px;
    box-shadow: 2px 2px 5px var(--colorBack);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

`
export const Box = styled.div`
    width: 80%;
    height: 100px;
    background-color: green;
`
