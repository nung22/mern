import './App.css';
import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);
  
  const newBoxAdded = ( newBox ) => {
    setBoxes([...boxes, newBox]);
  }
  
  return (
      <div className='p-10 flex flex-col items-center'>
          <BoxForm onNewBox={ newBoxAdded } />
          <BoxDisplay Boxes={ boxes } />
      </div>
  );
}

export default App;