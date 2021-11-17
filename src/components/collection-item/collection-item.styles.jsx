import styled, {keyframes} from "styled-components";

const animate = keyframes`
    from{
        opacity: 0;
        transform: rotateX(120deg);
    }
    to{
        opacity: 1;
        transform: none;
    }
`;

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    animation: ${animate} 1s;

    @media screen and (max-width: 800px) {
        width: 40vw;
    }
`;

export const CollectionItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 5px;
`;

export const CollectionItemFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const CollectionItemText = styled.span`
    font-size: 1.1em;
    font-weight: bold;
`;