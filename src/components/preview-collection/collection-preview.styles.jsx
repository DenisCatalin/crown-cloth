import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

export const CollectionPreviewText = styled.span`
    font-size: 28px;
    margin-bottom: 25px;
`;

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

const linkStyles = css`
    font-weight: 100;

    &:hover {
        font-weight: bold;
    }
`;

export const CollectionPreviewLink = styled(Link)`
    ${linkStyles}
`;

export const CollectionPreviewPreview = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;