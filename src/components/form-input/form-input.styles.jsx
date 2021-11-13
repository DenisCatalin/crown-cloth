import styled, { css } from "styled-components";

export const FormInputContainer = styled.div`
    position: relative;
    margin: 45px 0;
`;

const FormLabelStyle = css`
    color: grey;
    font-size: 1.2em;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
`;

export const FormInputLabel = styled.label`
    ${FormLabelStyle}
`;

const FormInputStyle = css`
    background: none;
    background-color: white;
    color: grey;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey;
    margin: 25px 0;

    &:focus {
      outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        top: -25px;
        font-size: 1em;
        color: black;
    }

    &:valid ~ ${FormInputLabel} {
        top: -25px;
        font-size: 1em;
        color: black;
    }
`;

export const FormInputInput = styled.input`
    ${FormInputStyle}
`;