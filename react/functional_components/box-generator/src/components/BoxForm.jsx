import React, { useState } from "react";

export default function BoxForm(props) {
  const [box, setBox] = useState({
    boxColor:'', 
    sideLength:''
  });

  const handleAdd = e => {
    e.preventDefault();
    props.onNewBox(box)
    e.target.reset();
  };
    
  return (
    <form onSubmit={handleAdd} className="flex justify-between items-center w-6/12">
      <h1>Color</h1>
      <input type="text" placeholder="Type here" className="input w-32 input-bordered" 
        onChange={ e => setBox({...box, boxColor: e.target.value})} />
      <h1>Side Length (in px)</h1>
      <input type="text" placeholder="Type here" className="input w-32 input-bordered" 
        onChange={ e => setBox({...box, sideLength: e.target.value})} />
      <input className="btn" type="submit" value="Add" />
    </form>
  );
};