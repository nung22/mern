import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import Error from './views/Error';
import Create from './views/Create';

function App() {
  return (
    <div className="App p-8 flex justify-center">
      <Routes>
        <Route path="/" element={<Navigate to="/players"/>}/>
        <Route element={<Main/>} path="/players" />
        <Route element={<Create/>} path="/players/new" />
        <Route element={<Detail/>} path="/players/:id" />
        <Route element={<Update/>} path="/players/:id/edit" />
        <Route element={<Error/>} path="*" />
      </Routes>
    </div>
  );
}
export default App;

