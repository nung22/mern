import React, { useState } from "react";
import { Link } from 'react-router-dom'
export default function AuthorForm(props) {
  //import form values & methods via props
  const { 
    formName,
    initialName,
    onSubmitProp 
  } = props;
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onSubmitProp({ name });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-blue-400">{formName}:</h2>
      <form className="flex flex-col gap-5 mt-4" onSubmit={onSubmitHandler}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
          onChange={e => setName(e.target.value)} value={name}/>
        </div>
        <div className="flex justify-center gap-3">
          <Link to={`/`} className='btn btn-sm btn-secondary'>Cancel</Link>
          <input className="btn btn-primary btn-sm w-24" type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}
