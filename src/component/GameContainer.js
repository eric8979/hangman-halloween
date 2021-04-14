import React, { Fragment, useState, useEffect } from 'react';

import Figure from './Figure';
import Loading from './Loading';
import WrongLetters from './WrongLetters';
import Word from './Word';

const GameContainer = () => {
  let gamePage = (
    <Fragment>
      <div className='game1'>
        <WrongLetters />
        <Figure />
      </div>
      <Word />
    </Fragment>
  );

  const [load, setLoad] = useState(<Loading />);

  useEffect(() => {
    setTimeout(() => {
      setLoad(<Fragment>{gamePage}</Fragment>);
    }, 1000);
  });

  return (
    <Fragment>
      <div className='landing'></div>
      <div className='lightning flashit'></div>
      {load}
    </Fragment>
  );
};

export default GameContainer;
