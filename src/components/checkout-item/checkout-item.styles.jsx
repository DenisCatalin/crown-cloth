import styled, { keyframes } from "styled-components";

const animate = keyframes`
    from { transform: translateX(-130%) rotateZ(50deg); opacity: 0; filter: blur(10px); }
    to { transform: none; }
`;

const reveal = keyframes`
    from { opacity: 0; transform: scale(0); }
    to { opacity: 1; transform: scale(1); }
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    animation: ${animate} 1s;
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    animation: ${reveal} 1.4s;
`;

export const CheckoutItemRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    animation: ${reveal} 1.4s;
`;

export const CheckoutItemSpaceBetweenElements = styled.span`
    width: 23%
`;

export const QuantityContainer = styled.span`
    display:flex;
    width: 23%;
`;

export const CheckoutItemArrow = styled.div`
    cursor: pointer; 
    user-select: none;
    animation: ${reveal} 1.4s;
`;

export const CheckoutItemValue = styled.div`
    margin: 0 10px;
    user-select: none;
    font-weight: lighter;
    animation: ${reveal} 1.4s;
`;