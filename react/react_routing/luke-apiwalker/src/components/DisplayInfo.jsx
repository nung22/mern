import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import error from '../assets/error.gif';
import { Link } from 'react-router-dom'


const DisplayInfo = (props) => {
  const {category, id} = useParams();
  const [searchData, setSearchData] = useState(null);
  const [home, setHome] = useState('');

  useEffect(() => {
    axios.get(`https://swapi.dev/api/${category}/${id}`)
      .then(response => {
        setSearchData(response.data);
        // console.log(response.data);
        if(category === 'people') {
          axios.get(response.data.homeworld)
          .then(response => {
            setHome(response.data);
            // console.log(response.data.name);
          })
        }
      })
      .catch(err=>{
        setSearchData(err);
        // console.log(err);
      })
  }, [category, id]);

  return ( 
  <div>
  {
    searchData !== null && searchData.name === "AxiosError" ?
      <img className='w-full mt-8' style={{width:'36rem'}} src={error} alt="These aren't the droid you're looking for." />:
    searchData !== null && category === "people" ?
      <div className='flex flex-col gap-3'>
        <h1 className='font-extrabold text-4xl underline my-8'>{searchData.name}</h1>
        <p><span className='font-bold text-warning'>Height (cm): </span>{searchData.height}</p>
        <p><span className='font-bold text-warning'>Mass (kg): </span>{searchData.mass}</p>
        <p><span className='font-bold text-warning'>Hair Color: </span>{searchData.hair_color}</p>
        <p><span className='font-bold text-warning'>Skin Color: </span>{searchData.skin_color}</p>
        {searchData.homeworld !== undefined && <Link to={`/${searchData.homeworld.slice(22)}`} className='font-bold text-success'
        >{home.name}</Link>}
      </div>:
    searchData !== null && category === "planets" ?
      <div className='flex flex-col gap-3'>
        <h1 className='font-extrabold text-4xl underline my-8'>{searchData.name}</h1>
        <p><span className='font-bold text-warning'>Climate: </span>{searchData.climate}</p>
        <p><span className='font-bold text-warning'>Terrain: </span>{searchData.terrain}</p>
        <p><span className='font-bold text-warning'>Surface Water: </span>
          {searchData.surface_water
            ? <span>true</span>
            : <span>false</span>
          }
        </p>
        <p><span className='font-bold text-warning'>Population: </span>{parseInt(searchData.population).toLocaleString("en-US")}</p>
      </div>:
    searchData !== null && (category === "vehicles" || category === "starships")?
      <div className='flex flex-col gap-3'>
        <h1 className='font-extrabold text-4xl underline my-8'>{searchData.name}</h1>
        <p><span className='font-bold text-warning'>Manufacturer: </span>{searchData.manufacturer}</p>
        <p><span className='font-bold text-warning'>Model: </span>{searchData.model}</p>
        <p><span className='font-bold text-warning'>Passengers: </span>{searchData.passengers}</p>
        <p><span className='font-bold text-warning'>Cost in Credits (ᖬ): </span>{parseInt(searchData.cost_in_credits).toLocaleString("en-US")}</p>
      </div>:
    searchData !== null && category === "species" ?
    <div className='flex flex-col gap-3'>
      <h1 className='font-extrabold text-4xl underline my-8'>{searchData.name}</h1>
      <p><span className='font-bold text-warning'>Classification: </span>{searchData.classification}</p>
      <p><span className='font-bold text-warning'>Designation: </span>{searchData.designation}</p>
      <p><span className='font-bold text-warning'>Average Lifespan (yrs): </span>{searchData.average_lifespan}</p>
      <p><span className='font-bold text-warning'>Language: </span>{searchData.language}</p>
    </div>:
    searchData !== null && category === "films" ?
    <div className='flex flex-col gap-3'>
      <h1 className='font-extrabold text-4xl underline my-8'>{searchData.title}</h1>
      <p><span className='font-bold text-warning'>Episode: </span>{searchData.episode_id}</p>
      <p><span className='font-bold text-warning'>Director: </span>{searchData.director}</p>
      <p><span className='font-bold text-warning'>Producer: </span>{searchData.producer}</p>
      <p><span className='font-bold text-warning'>Release Date: </span>{searchData.release_date}</p>
    </div>:
      ''
  }
  </div>
  );
}

export default DisplayInfo;