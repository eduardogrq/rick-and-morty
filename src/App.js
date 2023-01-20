import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';

function App() {

  const characters = useSelector(state => state.characters)
  console.log(characters)
  const challenges = useSelector(state => state.challenges)
  console.log(challenges)

  return (
    <div className="App">
      <h1>Hello World! and {characters}</h1>
    </div>
  );
}

export default App;
