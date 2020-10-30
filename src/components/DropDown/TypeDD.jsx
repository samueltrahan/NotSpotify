import React, { useState } from 'react';
import './TypeDD.css';

export default function TypeDD() {
  const [typeValue, setTypeValue] = useState('');
  return (
    <>
      <h3 className="type-heading">Select Type</h3>
      <div className="drop-down">
        <div className="drop-down-item">
          <select
            value={typeValue}
            // eslint-disable-next-line arrow-parens
            onChange={e => setTypeValue(e.target.value)}
            className="select ui dropdown"
          >
            <option disabled value="0" placeholder="Type">
              Type
            </option>
            <option value="1">Album</option>
            <option value="2">Playlist</option>
            <option value="3">Songs</option>
            <option value="3">Artists</option>
          </select>
          <h5>{typeValue}</h5>
        </div>
      </div>
    </>
  );
}
