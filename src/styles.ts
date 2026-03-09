import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
    text-align: center;
    display: grid;
    align-items: center;
    gap: 5px;
    grid-template-columns: calc(40% - 5px) calc(60% - 5px);/*calc(15% - 5px); */
    > article {
        height: calc(100dvh - 120px);
    }
`;


export {
    StyledMain
}