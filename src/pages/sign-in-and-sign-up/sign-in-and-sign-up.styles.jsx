import styled, {keyframes} from "styled-components";

const animate = keyframes`
    from{ opacity: 0; transform: translate(45%, 50%) rotateZ(55deg); filter: blur(4px); }
    to{ transform:none; }
`;

export const SignInAndSignUpContainer = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    animation: ${animate} 1.2s;
`;