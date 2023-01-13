import React, { useState } from "react";

export default function Tabs(props) {
  const [tabContent, setTabContent] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setTabContent(e);
    props.onContentChange(tabContent);
  };
    
  return (
    <form className="">
      <textarea type="text" placeholder="Type here" className="input w-96 input-bordered h-24"
        onChange={handleChange} value={props.tabs[props.currentTab]}></textarea>
      <div>{props.currentTab}</div>
    </form>
  );
};