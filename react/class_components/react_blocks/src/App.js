import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Subcontent from './Components/Subcontent';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
        <Header />
        <Navigation />
        <Main>
          <div className="SC">
            <Subcontent />
            <Subcontent />
            <Subcontent />
          </div>
          <Advertisement />
        </Main>
    </div>
  );
}

export default App;