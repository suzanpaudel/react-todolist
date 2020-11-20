import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  const [inputTask, setInputTask] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Navbar />
      <TodoInput
        inputTask={inputTask}
        setInputTask={setInputTask}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
