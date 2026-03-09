import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDetails = styled.div`
    color: rgb(153, 153, 231);
    font-size: clamp(1rem, 1.7vw, 1.3rem);
    font-weight: 600;
    padding-top: 20px;
    img {
        width: 50%;
    }
`;

const StyledLinks = styled(Link)`
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin: 20px;
`;

const StyledContainer = styled.article`
    overflow-y: auto;
    border-radius: 8px;
    background-color: rgb(27, 27, 27);
`;

export {
    StyledDetails,
    StyledLinks,
    StyledContainer
}