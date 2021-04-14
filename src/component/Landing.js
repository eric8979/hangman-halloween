import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Fragment>
      <div className='landing'></div>
      <div className='lightning flashit'></div>

      <div className='header'>
        <h1>🎃 HangMan 🎃</h1>
        <h2>- halloween edition -</h2>
      </div>

      <div className='bat-container pin-bottom'>
        <div className='bat-wrapper'>
          <div className='bat js-bat'>
            <div className='bat-leg-1'></div>
            <div className='bat-leg-2'></div>
          </div>
        </div>
      </div>

      <div className='start-button'>
        <Link className='button' to='/game'>
          Start!
        </Link>
      </div>
    </Fragment>
  );
};

export default Landing;
