import styled from "styled-components";


export const Bt =styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    flex-direction: row;
`
export const BtLight = styled.div`
    background-color: #C9C9C9;
    padding: 8px;
    border:1px solid black;
    border-radius: 20px;
    margin-left: 20px;
    cursor: pointer;
`
export const BtDark = styled.div`
    background-color: var(--colorBack);
    padding: 8px;
    border:1px solid black;
    border-radius: 20px;
    margin-left: 20px;
    color: white;
    cursor: pointer;
`