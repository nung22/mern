import greeting from './assets/hello-there.jpg';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import DisplayInfo from './components/DisplayInfo';
import SearchBar from './components/SearchBar'

const Welcome = (props) => {
  return (  
    <img className="mt-8" style={{width:'36rem'}} src={greeting} alt="Obi-Wan saying 'Hello There'" />
    );
}

function App() {
    return (
    <div className="p-16 text-xl">
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/:category/:id' element={<DisplayInfo/>}/>
      </Routes>
    </div>
  );
}

export default App;