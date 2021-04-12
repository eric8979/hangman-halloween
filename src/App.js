import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Landing from './component/Landing';
import GameContainer from './component/GameContainer';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/game' component={GameContainer} />
      </Router>
    </div>
  );
};

export default App;
