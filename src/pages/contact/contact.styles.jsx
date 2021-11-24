import styled, {css} from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactForm = styled.div`
    width: 40%;
    height: 75vh;
    border: 1px solid black;
    display: flex;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    width: 50%;
    position: relative;
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    resize: none;
    height: 50%;
    border: 1px solid black;
    padding: 10px;
`;

const buttonHover = css`
    &:hover {
        background: white;
        color: black;
        border: 1px solid black;
    }
`;

export const FormContactButton = styled.button`
    width: 50%;
    height: 8%;
    background: black;
    color: white;
    border: none;
    outline: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 85%;
    font-weight: bold;
    font-family: 'Open Sans Condensed';
    font-size: 1.1em;
    cursor: pointer;
    letter-spacing: 1px;
    ${buttonHover}
`;