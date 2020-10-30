import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <div>
          <a label="image" href="/"><img className="logo" src="/images/spotify.png" alt="" /></a>
        </div>
      </nav>
    </div>
  );
}
