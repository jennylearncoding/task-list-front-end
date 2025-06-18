import TaskList from './components/TaskList.jsx';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.jsx';

const kBaseUrl = 'http://localhost:5000';

const getAllTasksApi = () => {
  return axios.get(`${kBaseUrl}/tasks`)
    .then( response => {
      return response.data.map(convertFromApi);
    })
    .catch( error => {
      console.log(error);
      return [];
    });
};

const convertFromApi = (apiTask) => {
  const { id, title, description, is_complete} = apiTask;
  const newTask = { id, title, description, isComplete: is_complete};
  return newTask;
};
const App = () => {
  //removed data and importing props
  const [tasks, setTasks] = useState([]);
// load tasks from backend
  useEffect(() => {
    getAllTasksApi().then(data => {
      setTasks(data);
    });
  }, []);

  //add toggle fuct
  const toggleTask = (id, isComplete) => {
    const url = isComplete
      ? `${kBaseUrl}/tasks/${id}/mark_incomplete`
      : `${kBaseUrl}/tasks/${id}/mark_complete`;

    axios.patch(url)
      .then(() => {
        // Refresh tasks
        getAllTasksApi().then(data => setTasks(data));
      })
      .catch(error => console.log(error));
  };
// add delete func
  const deleteTask = (id) => {
    axios.delete(`${kBaseUrl}/tasks/${id}`)
      .then(() => {
        getAllTasksApi().then(data => setTasks(data));
      })
      .catch(error => console.log(error));
  };

  //add new task func
  const addTask = (newTask) => {
    axios.post(`${kBaseUrl}/tasks`, newTask)
      .then(() => {
        getAllTasksApi().then(data => setTasks(data));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
          />
        </div>
        <NewTaskForm onAddTask={addTask} />
      </main>
    </div>
  );
};



export default App;
