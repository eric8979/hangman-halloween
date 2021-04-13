import React from 'react';

const Loading = () => {
  return (
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
};

export default Loading;
