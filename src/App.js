import React from 'react'
import NavBar from './components/navbar/NavBar.js'
import FlowBite from './components/FlowBite.js';
import './App.css';
import './index.css'
import 'flowbite';

function App() {
  return (

    <div className="App">
      <FlowBite />
      <NavBar />
    </div>
  );
}

export default App;
