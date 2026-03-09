import styled from "styled-components";

const StyledMainLibrary = styled.article`
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom 50% right 0px;
    width: 100%;
    background-color: rgb(27, 27, 27);
    section {
        display: block;
        box-sizing: border-box;
    }    
`;

const StyledLibraryList = styled.div`
    padding: 4px;
    div {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr;
        padding-top: 10px;
        padding-bottom: 10px;
        div span {width: 100%;
        img {
            width: 50%;
        }
        display: grid;
        grid-template-columns: 0.5fr 2.5fr 2.5fr 0.5fr;
        }
        &:hover{
        background-color: rgb(53, 47, 47);
        cursor: pointer;
        }
    }
`;

export {
    StyledMainLibrary,
    StyledLibraryList,
};