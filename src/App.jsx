import TaskList from './components/TaskList.jsx';
import './App.css';
import TASKS from '../data.js';
import { useState } from 'react';


const App = () => {
  return (git
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

export default App;
