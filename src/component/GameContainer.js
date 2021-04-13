import React, { Fragment, useState, useEffect } from 'react';

import Figure from './Figure';
import Loading from './Loading';
import WrongLetters from './WrongLetters';
import Word from './Word';

const GameContainer = () => {
  let gamePage = (
    <Fragment>
      <div className='game1'>
        <Figure />
        <WrongLetters />
      </div>
      <Word />
    </Fragment>
  );

  const [load, setLoad] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setLoad(<div className='gameContainer'>{gamePage}</div>);
    }, 1000);
  });

  return <Fragment>{load}</Fragment>;
};

export default GameContainer;
