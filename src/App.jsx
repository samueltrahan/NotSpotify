import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Spotify from 'spotify-web-api-js';
import NavBar from './components/NavBar';
import DropDown from './components/DropDown/DropDown';
import './App.css';

const clientId = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;

export default function App() {
  const [token, setToken] = useState('');
  const [genre, setGenre] = useState(
    ((selectedGenre: ''), (listofGenresFromAPI: [])),
  );

  useEffect(() => {
    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          // eslint-disable-next-line prefer-template
          'Basic ' + btoa(clientId + ':' + secret),
      },
      data: 'grant_type=client_credentials',
      method: 'POST',
      // eslint-disable-next-line arrow-parens
    }).then(tokenResonse => {
      console.log(tokenResonse.data.access_token);
      setToken(tokenResonse.data.access_token);

      axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
        method: 'GET',
        // eslint-disable-next-line prefer-template
        headers: { Authorization: 'Bearer ' + tokenResonse.data.access_token },
        // eslint-disable-next-line arrow-parens
      }).then(genreResponse => {
        setGenre({
          selectedGenre: genre.selectedGenre,
          listofGenresFromAPI: genreResponse.data.categories.items,
        });
      });
    });
  }, [genre.selectedGenre, clientId, secret]);

  return (
    <>
      <NavBar token={token} />
      <h1 className="title">NotSpotify</h1>
      <form>
        <DropDown options={genre.listofGenresFromAPI} />
        <div className="submit-button">
          <button className=" ui black button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
