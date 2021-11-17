import styled, {keyframes} from "styled-components";

const animate = keyframes`
    from{  
        transform: scale(0);
        border-radius: 10%;
    }
    to{
        transform: scale(1);
        border-radius: none;
    }
`;

export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    animation: ${animate} .5s;
`;

export const CartDropDownItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;  

export const CartDropDownMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`;