import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutItemRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
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
`;

export const CheckoutItemValue = styled.div`
    margin: 0 10px;
    user-select: none;
    font-weight: lighter;
`;