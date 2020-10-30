import React from 'react';
// import Spotify from 'spotify-web-api-js';
import NavBar from './components/NavBar';
import DropDown from './components/DropDown/DropDown';
import TypeDD from './components/DropDown/TypeDD';
import './App.css';

// const spotifyWebAPI = new Spotify();

export default function App() {
  return (
    <>
      <NavBar />
      <h1 className="title">NotSpotify</h1>

      <DropDown />
      <TypeDD />
      <div className="submit-button">
        <button className=" ui black button" type="submit">
          Submit
        </button>
      </div>
    </>
  );
}
