import logo from './logo.png';
import './App.css';
import React from 'react';
import WordCount from './wordcount.js'
import Pay from './pay.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="introText">
            <p>Got too much going on and don't know where to start?</p>
            <p>Just type in your to-do list below and we'll get some of the smarest PMs around to prioritise and build a roadmap for your to-do list!</p>
          </div>
        </header>
        <body>
          <Switch>
            <Route exact path="/">
              <WordCount></WordCount>
            </Route>
            <Route exact path="/pay">
              <Pay></Pay>
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
