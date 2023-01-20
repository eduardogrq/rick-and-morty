import React from 'react';
import './App.css';

import { useSelector } from 'react-redux';

function App() {

  const characters = useSelector(state => state.characters)
  console.log(characters)

  return (
    <div className="App">
      <h1>Hello World! and {characters}</h1>
    </div>
  );
}

export default App;
