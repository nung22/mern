import React, { useState, useEffect } from 'react'
import {
  useNavigate
} from "react-router-dom";
import axios from 'axios';

const SearchBar = (props) => {
  const categories = ["films","people","planets","starships","species","vehicles"];
  const [category, setCategory] = useState('');
  const [id, setId] = useState('');
  const [searchData, setSearchData] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
      axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
          setSearchData(response.data);
          console.log(category, id);
          console.log(response.data);
        })
        .catch(err=>{
          setSearchData(err);
          console.log(err);
        })
  }, [category,id]);

  const handleSearch = e => {
    e.preventDefault();
    props.onSearch(searchData);
    navigate(`/${category}/${id}`)
  }

  return ( 
    <div >
      <form className='flex gap-4 items-center' onSubmit={handleSearch}>
        <label htmlFor="category">Search for:</label>
        <select className="select select-bordered w-40 max-w-xs text-base mr-10 font-normal" id="category"
        onChange={ e => setCategory(e.target.value) }>
          <option disabled selected value="default">Pick one...</option>
          { categories.map( (item, i) =>
            <option key={i} value={item}>{item.toUpperCase()[0] + item.slice(1)}</option>
          ) }
        </select>
        <label htmlFor="id">ID:</label>
        <input type="text" placeholder="Type here" className="input input-bordered w-28 max-w-xs" 
        onChange={ e => setId(e.target.value) } value={id}/>
        <input type="submit" value="Search" className="btn btn-sm btn-accent" />
      </form>
    </div>
  );
}

export default SearchBar;