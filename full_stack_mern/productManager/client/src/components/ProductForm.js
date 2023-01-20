import React, { useState } from "react";
import axios from "axios";
export default function ProductForm() {
  //keep track of what is being typed via useState hook
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/products/new", {
        title,
        price,
        description
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    //clears text from inputs & resets state variables
    e.target.reset();
    setTitle("");
    setPrice("");
    setDescription("");
  };
  // onChange to update title, price, and description

  return (
  <form className="flex flex-col gap-5 mt-4" onSubmit={onSubmitHandler}>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Title</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
      onChange={e => setTitle(e.target.value)} value={title}/>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Price</span>
      </label>
      <input type="number" step={.01} placeholder="0.00" className="input input-bordered w-full max-w-xs"
      onChange={e => setPrice(e.target.value)} value={price}/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Description</span>
      </label> 
      <textarea className="textarea textarea-bordered h-24" placeholder="Type here"
      onChange={e => setDescription(e.target.value)} value={description}></textarea>
    </div>
    <input className="btn btn-primary btn-sm w-24" type="submit" value="Create"/>
  </form>
  )
}
