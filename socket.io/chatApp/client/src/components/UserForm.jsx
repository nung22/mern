import React, { useState } from 'react';

export default function UserForm(props) {
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    props.onSubmitProp(name);
  };
  
  return(
    <div>
      <h2 className="text-xl text-center font-semibold text-blue-400">Get started right now!</h2>
      <form className="flex flex-col gap-5 mt-4" onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">I want to start chatting with the name...</span>
          </label>
          <div className="input-group">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
            onChange={e => setName(e.target.value)} value={name}/>
            <input className="btn btn-accent" type="submit" value="Submit"/>
          </div>
        </div>
      </form>
    </div>
  )
}