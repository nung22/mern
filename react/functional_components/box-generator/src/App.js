import './App.css';
import React, { useState, state } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);
  
  const newBoxAdded = ( newBox ) => {
    setBoxes([...boxes, newBox]);
  }
  
  return (
      <div className='App p-10'>
          <BoxForm onNewBox={ newBoxAdded } />
          <BoxDisplay Boxes={ boxes } />
      </div>
  );
}

export default App;