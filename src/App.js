import logo from './logo.png';
import './App.css';
import React from 'react';
import WordCount from './wordcount.js'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Intro-text">
          <p>Got too much going on and don't know where to start?</p>
          <p>Just type in your to-do list below and we'll get some of the smarest PMs around to prioritise and build a roadmap for your to-do list!</p>
        </div>
        <form>
          <WordCount></WordCount>
        </form>
      </header>
    </div>
  );
}

export default App;
