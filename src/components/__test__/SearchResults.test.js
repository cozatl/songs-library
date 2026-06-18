import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import React from 'react';
import { fetchAlbum } from '../../redux/slices/albumSlice';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import SearchResults from '../SearchResults';
import { configureStore } from '@reduxjs/toolkit';
const axios = require('axios');

jest.mock('axios');

describe('SearchResults component', () => {
    it('should display search results from api', async () => {
        const mockAlbum = [{"album":[{"idAlbum":"2132466","idArtist":"114641","idLabel":null,"strAlbum":"Cold","strAlbumStripped":"Cold","strArtist":"Cold","strArtistStripped":"Cold","intYearReleased":"1998","strStyle":"Rock/Pop","strGenre":"Alternative Rock","strLabel":null,"strReleaseFormat":"Album","intSales":"0","strAlbumThumb":"https://r2.theaudiodb.com/images/media/album/thumb/ryswwq1365749247.jpg","strAlbumThumbHQ":null,"strAlbumBack":null,"strAlbumCDart":"","strAlbumSpine":null,"strAlbum3DCase":null,"strAlbum3DFlat":null,"strAlbum3DFace":null,"strAlbum3DThumb":null,"strDescription":"Cold is the debut album by American post grunge band Cold. It precedes the band's breakthrough success into the mainstream hard rock scene. The album produced two singles: \"Go Away\" and \"Give.\"","strDescriptionDE":null,"strDescriptionFR":null,"strDescriptionCN":null,"strDescriptionIT":null,"strDescriptionJP":null,"strDescriptionRU":null,"strDescriptionES":null,"strDescriptionPT":null,"strDescriptionSE":null,"strDescriptionNL":null,"strDescriptionHU":null,"strDescriptionNO":null,"strDescriptionIL":null,"strDescriptionPL":null,"intLoved":null,"intScore":null,"intScoreVotes":null,"intPopularity":null,"strReview":"","strMood":"","strTheme":null,"strSpeed":"","strLocation":null,"strMusicBrainzID":"2493b51a-49b1-31c6-9cf8-3cab3990308c","strMusicBrainzArtistID":"d9a2f1e6-6429-41ce-9d32-9a66188fb39c","strAllMusicID":"mw0000030104","strBBCReviewID":null,"strRateYourMusicID":"cold","strDiscogsID":"118392","strWikidataID":"Q1106287","strWikipediaID":"Cold_(Cold_album)","strGeniusID":null,"strLyricWikiID":null,"strMusicMozID":null,"strItunesID":null,"strAmazonID":null,"strUPCID":null,"strSpotifyID":null,"strLocked":"unlocked","intChecked":"0"}]}]
        const mockRes = {data: mockAlbum}

        axios.get.mockResolvedValue(mockRes);

        //Simulate dispatch and state
        const dispatch = jest.fn();
        const getState = jest.fn();

        await fetchAlbum('cold')(dispatch, getState, undefined);

        //Validate connectivity with API
        expect(axios.get).toHaveBeenCalledWith('https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=cold');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    it('should render elements in SearchResults', async () => {
        const mockAlbum = [{"album":[{"idAlbum":"2132466","idArtist":"114641","idLabel":null,"strAlbum":"Cold","strAlbumStripped":"Cold","strArtist":"Cold","strArtistStripped":"Cold","intYearReleased":"1998","strStyle":"Rock/Pop","strGenre":"Alternative Rock","strLabel":null,"strReleaseFormat":"Album","intSales":"0","strAlbumThumb":"https://r2.theaudiodb.com/images/media/album/thumb/ryswwq1365749247.jpg","strAlbumThumbHQ":null,"strAlbumBack":null,"strAlbumCDart":"","strAlbumSpine":null,"strAlbum3DCase":null,"strAlbum3DFlat":null,"strAlbum3DFace":null,"strAlbum3DThumb":null,"strDescription":"Cold is the debut album by American post grunge band Cold. It precedes the band's breakthrough success into the mainstream hard rock scene. The album produced two singles: \"Go Away\" and \"Give.\"","strDescriptionDE":null,"strDescriptionFR":null,"strDescriptionCN":null,"strDescriptionIT":null,"strDescriptionJP":null,"strDescriptionRU":null,"strDescriptionES":null,"strDescriptionPT":null,"strDescriptionSE":null,"strDescriptionNL":null,"strDescriptionHU":null,"strDescriptionNO":null,"strDescriptionIL":null,"strDescriptionPL":null,"intLoved":null,"intScore":null,"intScoreVotes":null,"intPopularity":null,"strReview":"","strMood":"","strTheme":null,"strSpeed":"","strLocation":null,"strMusicBrainzID":"2493b51a-49b1-31c6-9cf8-3cab3990308c","strMusicBrainzArtistID":"d9a2f1e6-6429-41ce-9d32-9a66188fb39c","strAllMusicID":"mw0000030104","strBBCReviewID":null,"strRateYourMusicID":"cold","strDiscogsID":"118392","strWikidataID":"Q1106287","strWikipediaID":"Cold_(Cold_album)","strGeniusID":null,"strLyricWikiID":null,"strMusicMozID":null,"strItunesID":null,"strAmazonID":null,"strUPCID":null,"strSpotifyID":null,"strLocked":"unlocked","intChecked":"0"}]}]
        const mockRes = {data: mockAlbum}

        axios.get.mockResolvedValue(mockRes);
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SearchResults />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText(/Search Artist/i)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();

        const input = screen.getByRole('textbox');
        const button = screen.getByRole('button');
        fireEvent.change(input, { target:{value:'Cold'} });

        expect(input.value).toBe('Cold');

        //Get button to add song to the library
        fireEvent.click(button);

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalled();
        }); 
        await waitFor(() => {
            expect(store.getState().album.status).toBe('succeeded');
        });
        // expect(screen.getByText('Cold')).toBeInTheDocument();
    });

    it('should map songs', async () => {
        const mockStore = configureStore({
            reducer:{
                album: () => ({
                    album: [],
                    status: 'IDLE'
                }),
                songs: () => ({
                    songs: [
                    {
                        idTrack:'32998845',
                        strTrack:'Go Away',
                        strArtist:'Cold',
                        intDuration:'281306',
                        albumImage:'test.jpg'
                    }
                ],
                status:'SUCCEEDED'
                })
            }
        })
        render(
            <Provider store={mockStore}>
                <MemoryRouter>
                    <SearchResults />
                </MemoryRouter>
            </Provider>
        );
        expect(screen.getByText('Cold')).toBeInTheDocument();
        expect(screen.getByText('Go Away')).toBeInTheDocument();
    });    
});