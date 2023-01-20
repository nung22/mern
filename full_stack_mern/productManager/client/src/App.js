import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App p-8 flex justify-center">
      <Routes>
        <Route element={<Main/>} path="/products" />
        <Route element={<Detail/>} path="/products/:id" />
      </Routes>
    </div>
  );
}
export default App;

