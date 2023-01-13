import './App.css';
import AddTask from './components/AddTask'
import DisplayTasks from './components/DisplayTasks'
import React, { useState, useEffect } from 'react';

const App = () => {
  // assigns the state variable tasks any data that is stored under the 'TASKS'
  // key of the localStorage, otherwise initialize the variable as an empty list
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem('TASKS')) || [];
  });

  // store current todo list in the 'TASKS' key of the localStorage to persist
  // the data when the browser refereshes
  useEffect(() => {
    localStorage.setItem('TASKS', JSON.stringify(tasks));
  }, [tasks]);

  const newTaskAdded = (newTask) => {
    // add a new task to the current to-do list
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