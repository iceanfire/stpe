import logo from './logo.png';
import './App.css';
import React from 'react';
import WordCount from './wordcount.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="introText">
          <p>Got too much going on and don't know where to start?</p>
          <p>Just type in your to-do list below and we'll get some of the smarest PMs around to prioritise and build a roadmap for your to-do list!</p>
        </div>
      </header>
      <body>
        <form>
          <WordCount></WordCount>
        </form>
      </body>
    </div>
  );
}

export default App;
