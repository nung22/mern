import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Update(props) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/products/${id}`, 
    {
      title,
      price,
      description
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
    navigate('/')
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Update Product</h1>
      <form className="flex flex-col gap-5 mt-4" onSubmit={updateProduct}>
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
          <label className="input-group">
            <input type="number" step={0.01} min={0.00} placeholder="0.00" className="input input-bordered w-full max-w-xs"
            onChange={e => setPrice(e.target.value)} value={price}/>
            <span>USD</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label> 
          <textarea className="textarea textarea-bordered h-24" placeholder="Type here"
          onChange={e => setDescription(e.target.value)} value={description}></textarea>
        </div>
        <div className="flex justify-center">
          <input className="btn btn-accent btn-sm w-24" type="submit" value="Update"/>
        </div>
      </form>
    </div>
  );
};