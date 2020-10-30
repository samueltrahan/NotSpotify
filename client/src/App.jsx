import React, { useState } from 'react';
import NavBar from './components/NavBar';
import DropDown from './components/DropDown/DropDown';
import TypeDD from './components/DropDown/TypeDD';
import './App.css';

export default function App() {
  const [params, setParams] = useState({});

  // eslint-disable-next-line no-unused-vars
  function getHashParams() {
    const hashParams = {};
    let e;
    const reg = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    // eslint-disable-next-line no-cond-assign
    while ((e = reg.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    setParams(hashParams);
  }

  return (
    <>
      <NavBar params={params} />
      <h1 className="title">NotSpotify</h1>
      <a href="http://localhost:8888">
        <button type="submit">Login with Spotify</button>
      </a>
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
