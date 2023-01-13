import './App.css';
import AddTask from './components/AddTask'
import DisplayTasks from './components/DisplayTasks'
import React, { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([]);

  const newTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const taskUpdated = (listIndex) => {
    // creates a new task list with the appropriate task updated
    const updatedTasks = tasks.map( (item, i) => {
      // changes completed condition of specified task
      if (i === listIndex) {
        return {
          ...item,
          completed: !item.completed
        }
      } 
      return item
    })
    setTasks(updatedTasks);
  }

  const taskDeleted = (listItem) => {
    // create new task list without the deleted item
    const updatedTaskList = tasks.filter( (item) => item !== listItem )
    setTasks(updatedTaskList);
  }

  return (
    <div className='flex justify-center'>
      <div className="p-12">
        <AddTask onNewTask={ newTaskAdded }/>
        <DisplayTasks tasks={ tasks } onTaskUpdate={taskUpdated} onTaskDelete={taskDeleted}/>
      </div>
    </div>
  );
}

export default App;
