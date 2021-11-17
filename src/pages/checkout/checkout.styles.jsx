import styled, { css } from "styled-components";

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const CheckoutPageHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

const headerSpacing = css`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 800px) {
        &:last-child {
            transform:translateX(-45%);
        }
    }
`;

export const CheckoutHeaderSpacing = styled.div`
    ${headerSpacing}
`;

export const CheckoutPageTotal = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    @media screen and (max-width: 800px) {
        font-size: 1.6em;
    }
`;