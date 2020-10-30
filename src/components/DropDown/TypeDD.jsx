import React from 'react';
import './TypeDD.css';

export default function TypeDD() {
  return (
    <>
      <h3 className="type-heading">Select Type</h3>
      <div className="drop-down">
        <div className="drop-down-item">
          <select className="select ui dropdown">
            <option disabled value="0" placeholder="Type">
              Type
            </option>
            <option value="1">Album</option>
            <option value="2">Playlist</option>
            <option value="3">Songs</option>
            <option value="3">Artists</option>
          </select>
        </div>
      </div>
    </>
  );
}
