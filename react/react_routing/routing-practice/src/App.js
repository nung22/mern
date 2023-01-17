import './App.css';
import React from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from "react-router";
import Survey from "./components/Survey";

const Home = (props) => {
  return (
    <h1>Welcome</h1>
  );
}

const DisplayInput = (props) => {
  const {input} = useParams();

  return (
    <h1>
      {
        isNaN(input)
        ? 'The word is: '
        : 'The number is: '
      }
      {input}
    </h1>
  );
}

const DisplayMessage = (props) => {
  const {word, textColor, backgroundColor} = useParams(); 

  return ( 
    <h1 className='p-5' style={{color:`${textColor}`, backgroundColor:`${backgroundColor}`}}>The word is: {word}</h1>
  );
}

function App() {
  return (
    <div className='text-center p-8 text-4xl'>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:input' element={<DisplayInput />}/>
        <Route path='/:word/:textColor/:backgroundColor' element={<DisplayMessage />}/>
      </Routes>
    </div>
  );
}


export default App;
