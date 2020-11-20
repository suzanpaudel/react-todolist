import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
function App() {
  const [inputTask, setInputTask] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Navbar />
      <TaskInput
        inputTask={inputTask}
        setInputTask={setInputTask}
        todos={todos}
        setTodos={setTodos}
      />
      <TaskList todos={todos} />
    </div>
  );
}

export default App;
