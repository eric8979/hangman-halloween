import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='landing'>
      <div className='header'>
        <h1>🎃 HangMan 🎃</h1>
        <h2>Find the hidden word!</h2>
      </div>

      <div className='start-button'>
        <Link to='/game'>Start!</Link>
      </div>
    </div>
  );
};

export default Header;
