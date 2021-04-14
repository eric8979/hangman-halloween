import React, { useState } from 'react';

const Word = () => {
  const words = [
    'apple',
    'program',
    'google',
    'microsoft',
    'android',
    'python',
    'javascript',
    'dynamic',
    'application',
    'interface',
  ];
  const [word, setWord] = useState('');

  const onClick = () => {
    const ind = Math.floor(Math.random() * 10);
    setWord(words[ind]);
  };

  const charArr = word.split('');
  const chars = charArr.map((char, ind) => {
    return (
      <div className='letter' key={ind}>
        {char}
      </div>
    );
  });

  return (
    <div className='word-box'>
      <div className='word'>{chars}</div>
      <div className='word-btn' onClick={() => onClick()}>
        Pick!
      </div>
    </div>
  );
};

export default Word;
