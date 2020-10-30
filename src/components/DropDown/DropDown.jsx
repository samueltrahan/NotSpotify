import React from 'react';
import './DropDown.css';

export default function DropDown() {
  return (
    <>
      <h3 className="genre">Genre</h3>
      <div className="drop-down">
        <div className="drop-down-item">
          <select className="select ui dropdown">
            <option disabled value="0" placeholder="Genre">
              Genre
            </option>
            <option value="1">Hip-Hop</option>
            <option value="2">Rap</option>
            <option value="3">R&B</option>
            <option value="4">Jazz</option>
            <option value="5">Rock</option>
            <option value="6">Electronic Dance Music</option>
            <option value="7">Soul Music</option>
            <option value="8">Country</option>
            <option value="9">Pop</option>
            <option value="10">LO-FI Beats</option>
          </select>
        </div>
      </div>
    </>
  );
}
