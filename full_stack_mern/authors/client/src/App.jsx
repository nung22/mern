import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Error from './views/Error';

function App() {
  return (
    <div className="App p-8 flex flex-col items-center gap-7">
      <h1 className="text-center text-3xl font-bold underline">Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/authors"/>}/>
        <Route element={<Main/>} path="/authors" />
        <Route element={<Create/>} path="/authors/new" />
        <Route element={<Update/>} path="/authors/:id/edit" />
        <Route element={<Error/>} path="*" />
      </Routes>
    </div>
  );
}
export default App;

