import React from 'react';
import NavBar from './components/NavBar';
import DropDown from './components/DropDown/DropDown';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar />
      <h1 className="title">NotSpotify</h1>
      <DropDown />
    </>
  );
}
