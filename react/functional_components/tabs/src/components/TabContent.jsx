import React, { useState } from "react";

export default function Tabs(props) {
  const [tabContent, setTabContent] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTabContent(e)
    props.onContentChange(tabContent)
  };
    
  return (
    <form className="flex justify-between items-center w-4/12">
      <h1>Color</h1>
      <input type="text" placeholder="Type here" className="input w-32 input-bordered" 
        onChange={ e => handleChange(e.target.value)} />
    </form>
  );
};