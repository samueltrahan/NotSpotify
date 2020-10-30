/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './DropDown.css';

// eslint-disable-next-line react/prop-types
export default function DropDown({ options }) {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <>
      <h3 className="genre">Select Genre</h3>
      <select
        value={selectedValue}
        // eslint-disable-next-line arrow-parens
        onChange={e => setSelectedValue(e.target.value)}
        className="select ui dropdown"
      >
        {options.map(item => (
          <option key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <h5>{selectedValue}</h5>
    </>
  );
}
