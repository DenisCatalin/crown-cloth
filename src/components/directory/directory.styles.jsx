import styled, {keyframes} from "styled-components";

const animate = keyframes`
    from{
        transform: scale(0) rotateZ(10deg) rotateX(180deg);
        opacity: 0;
    }
    to{
        transform: scale(1);
        opacity: 1;
    }
`;

export const DirectoryMenu = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    animation: ${animate} 1s;
`;