import React, { useState } from 'react';

const AddTask = (props) => {
  const [task, setTask] = useState({
    description: '',
    completed: false
  });

  const handleAdd = (e) => {
    e.preventDefault();
    props.onNewTask(task);
    // clears submitted task from input
    e.target.reset();
    // resets task description
    setTask({...task, description:''});
  } 

  return ( 
  <form className='flex gap-7 items-center border-b-2 pb-4 border-b-white' onSubmit={handleAdd}>
    <h1 className='text-xl font-semibold'>New Task: </h1>
    <input type="text" placeholder="Type here" className="input w-64 input-bordered"
      onChange={ e => setTask({...task, description: e.target.value}) }/>
    <input className="btn btn-sm btn-success" type="submit" value="Add"/>
  </form> 
  );
}

export default AddTask;