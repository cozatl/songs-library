import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Songs from '../Songs/SongsLibrary';
import Song from '../Songs/Song';

describe('SearchResults component', () => {
    it('should render result song and adding it to the library', async () => {
        const mockSong = {
            "idTrack": "32998845",
            "strTrack": "Go Away",
            "strArtist": "Cold",
            "intDuration": "281306",
            "albumImage": "https://r2.theaudiodb.com/images/media/album/thumb/ryswwq1365749247.jpg"
        };
        const mockRes = {songs: mockSong};
        
        //Render the song in the search results
        render( <Provider store={store}>
                    <MemoryRouter>
                        <Song 
                            addBtn='test.svg'
                            song={mockRes.songs}/>
                    </MemoryRouter>
                </Provider>);

        const artist = screen.getByRole('link', {name:`${mockRes.songs.strArtist}`});
        expect(artist).toBeInTheDocument();

        const button = screen.getByRole('button', {name:'add'}); //Get button to add song to the library
        await fireEvent.click(button);
        expect(store.getState().library.songs.length).toBe(1);  //Validate song was added once the button was clicked
        
        expect(store.getState().library.songs[0].strArtist).toBe('Cold');   //Review artist was added
        expect(store.getState().library.songs[0].strTrack).toBe('Go Away'); //Review song was added
    });

    it('should remove song from library', async () => {
        const mockSong = {
            "idTrack": "32998845",
            "strTrack": "Go Away",
            "strArtist": "Cold",
            "intDuration": "281306",
            "albumImage": "https://r2.theaudiodb.com/images/media/album/thumb/ryswwq1365749247.jpg"
        
    };
        const mockRes = {songs: mockSong};
        
        //Render the song in the search results
        render( <Provider store={store}>
                    <MemoryRouter>
                        <Songs
                            song={mockRes.songs}/>
                    </MemoryRouter>
                </Provider>);

        // const artist = screen.getByRole('link', {name:`${mockRes.songs.strArtist}`});
        // expect(artist).toBeInTheDocument();
        // console.log(store.getState().songs[0])
        expect(mockRes.songs.strArtist).toBe('Cold');   //Review artist is still added before removing it
        expect(store.getState().library.songs[0].strArtist).toBe('Cold');   //Review artist is still added before removing it
        expect(mockRes.songs.strTrack).toBe('Go Away'); //Review song is still added before removing it
        expect(store.getState().library.songs[0].strTrack).toBe('Go Away'); //Review song is still added before removing it

        const removeSong = screen.getByRole('button', {name:'remove'});  //Validate if remove button is rendered
        await fireEvent.click(removeSong);
        expect(store.getState().library.songs.length).toBe(0);  //Validate song was removed once button was clicked
        
        
    });
});