import React, { Fragment, useState, useEffect } from 'react';

import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';

const GameContainer = () => {
  let page = (
    <div className='outer'>
      <div id='container'>
        <div id='spooky'>
          <div id='body'>
            <div id='eyes'></div>
            <div id='mouth'></div>
            <div id='feet'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div id='shadow'></div>
      </div>
      <br />
      <span className='loading'>Loading ...</span>
    </div>
  );

  let gamePage = (
    <Fragment>
      <div className='game1'>
        <Figure />
        <WrongLetters />
      </div>
      <Word />
    </Fragment>
  );

  const [load, doneLoad] = useState(page);

  useEffect(() => {
    setTimeout(() => {
      doneLoad(<div className='gameContainer'>{gamePage}</div>);
    }, 1000);
  });

  return <Fragment>{load}</Fragment>;
};

export default GameContainer;
