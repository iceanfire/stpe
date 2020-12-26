import logo from './logo.png';
import './App.css';
import React from 'react';
import WordCount from './wordcount'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Intro-text">
          Can’t figure out what to focus on? Get some of the top PMs in the world to prioritise your life for you.
        </p>
        <p className="Intro-text">
          Just enter a list below and make your payment (0.20 per word) -- and we’ll respond with a reprioritised list within 24 hours.
        </p>
        <form>
          <WordCount></WordCount>
        </form>
      </header>
    </div>
  );
}

export default App;
