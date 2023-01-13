import React from 'react';

export default function Tabs(props) {
  const tabNums = [1,2,3,4];

  const handleChange = e => {
    e.preventDefault();
    props.onTabSwitch(e.target.value);
  };

  return ( 
    <div className="btn-group">
      {tabNums.map( (item, i) =>
        <input key={i} type="radio" name="options" data-title={item} className="btn" 
          onClick={ () => console.log(item) }/> )}
  </div>
  ); 
};