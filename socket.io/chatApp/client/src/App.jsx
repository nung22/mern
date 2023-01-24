import './App.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    // we need to set up all of our event listeners
    // in the useEffect callback function
    console.log('Is this running?');
    socket.on("message", data => console.log(data));

    // note that we're returning a callback function
    // this ensures that the underlying socket will be closed if App is unmounted
    // this would be more critical if we were creating the socket in a subcomponent
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App p-8 flex flex-col items-center justify-center">
      <h1 className='text-center text-3xl font-bold mb-10'>MERN Chat</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route element={<Main/>} path="/home" />
      </Routes>
    </div>
  );
}
export default App;

