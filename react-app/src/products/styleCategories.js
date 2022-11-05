import styled from "styled-components";

export const StyleAll = styled.div`
    width: 100%;
    height: 50px;
    background-color: var(--colorBack);
    border-top: 4px solid var(--colorOrange);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`
export const EachC = styled.a`
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: 0.3s;
    cursor: pointer;

    :hover{
        color: var(--colorOrange);
    }



`