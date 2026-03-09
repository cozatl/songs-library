import styled from "styled-components";

const StyledMainArtists = styled.article`
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 8px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom 50% right 0px;
    width: 100%;
    background-color: rgb(27, 27, 27);  
`;

const StyledArtistsList = styled.div`
    padding: 4px;
`;

const StyledArtistsSearch = styled.div`
    padding: 4px;
`;

const StyledArtistsTitle = styled.section`
    display: grid;
    grid-template-columns: 1fr 35px;
    padding-top:10px;
    .artist__description {
    display: grid;
    grid-template-columns: 35px 1fr;
    justify-items: start;
    gap: 10px;
    img {
        width: 100%;
    }
    span {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    }
    .artist__description:hover {
    background-color: rgb(53, 47, 47);
    cursor: pointer;
    }
    p{
        display: none;
    }
    button {
        background-color: transparent;
    }
`;

export {
    StyledMainArtists,
    StyledArtistsList,
    StyledArtistsSearch,
    StyledArtistsTitle,
};