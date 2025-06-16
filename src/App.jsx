import TaskList from './components/TaskList.jsx';
import './App.css';
import TASKS from '../data.js';
import { useState } from 'react';



const App = () => {
  //removed data and importing props
  const [tasks, setTasks] = useState(TASKS);

  //add toggle fuct
  const toggleTask = (id) =>{
    const updatedTasks = tasks.map((task)=>{
      if (task.id == id){
        return { ...task, isComplete: !task.isComplete }
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
// add delete func
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList //pass state func
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        </div>
      </main>
    </div>
  );
};

export default App;
