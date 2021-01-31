import React from 'react';
import TEST from './assets/not-found-test.gif';

import './App.scss';

const App = ({ name }) => {
  return (
    <div className="app">
      <div className="container">
        <img src={TEST} alt="" />
      </div>
      <p>this is our app</p>
      by <strong>{name}</strong>
    </div>
  );
};

export default App;
