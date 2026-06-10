require('react-router-dom');
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import React from 'react';
import SearchResults from '../SearchResults';
import { fetchAlbum } from '../../redux/slices/albumSlice';
import { MemoryRouter, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
const axios = require('axios');

jest.mock('axios');

describe('SearchResults component', () => {
    // it('should display search results from api', async () => {
    //     const mockAlbum = [{"album":[{"idAlbum":"2132466","idArtist":"114641","idLabel":null,"strAlbum":"Cold","strAlbumStripped":"Cold","strArtist":"Cold","strArtistStripped":"Cold","intYearReleased":"1998","strStyle":"Rock/Pop","strGenre":"Alternative Rock","strLabel":null,"strReleaseFormat":"Album","intSales":"0","strAlbumThumb":"https://r2.theaudiodb.com/images/media/album/thumb/ryswwq1365749247.jpg","strAlbumThumbHQ":null,"strAlbumBack":null,"strAlbumCDart":"","strAlbumSpine":null,"strAlbum3DCase":null,"strAlbum3DFlat":null,"strAlbum3DFace":null,"strAlbum3DThumb":null,"strDescription":"Cold is the debut album by American post grunge band Cold. It precedes the band's breakthrough success into the mainstream hard rock scene. The album produced two singles: \"Go Away\" and \"Give.\"","strDescriptionDE":null,"strDescriptionFR":null,"strDescriptionCN":null,"strDescriptionIT":null,"strDescriptionJP":null,"strDescriptionRU":null,"strDescriptionES":null,"strDescriptionPT":null,"strDescriptionSE":null,"strDescriptionNL":null,"strDescriptionHU":null,"strDescriptionNO":null,"strDescriptionIL":null,"strDescriptionPL":null,"intLoved":null,"intScore":null,"intScoreVotes":null,"intPopularity":null,"strReview":"","strMood":"","strTheme":null,"strSpeed":"","strLocation":null,"strMusicBrainzID":"2493b51a-49b1-31c6-9cf8-3cab3990308c","strMusicBrainzArtistID":"d9a2f1e6-6429-41ce-9d32-9a66188fb39c","strAllMusicID":"mw0000030104","strBBCReviewID":null,"strRateYourMusicID":"cold","strDiscogsID":"118392","strWikidataID":"Q1106287","strWikipediaID":"Cold_(Cold_album)","strGeniusID":null,"strLyricWikiID":null,"strMusicMozID":null,"strItunesID":null,"strAmazonID":null,"strUPCID":null,"strSpotifyID":null,"strLocked":"unlocked","intChecked":"0"}]}]
    //     fetch.mockResponseOnce(JSON.stringify(mockAlbum));

    //     const album = await fetchAlbum('cold');

    //     expect(fetch).toHaveBeenCalledWith('https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=cold');
    //     expect(album).toEqual(mockAlbum);

    //     render(<Routes><SearchResults /></Routes>);

    //     const button = screen.getByRole('button');
    //     fireEvent.click(button);   //Simulate 1 element clicked.

    //     // const headerTitle = screen.getByText(`${title}`);
    //     // expect(headerTitle).toBeInTheDocument();
    // })
    test('router', () => {
        render (
            <Provider store={store}>
                <MemoryRouter>
                    <div>test</div>
                </MemoryRouter>
            </Provider>
        )
    })
})