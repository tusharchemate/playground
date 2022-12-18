import './App.css';
import Todo from './components/Todo/index';
import TodoList from './components/TodoList/index';
import { useState } from 'react';
import ProgessBar from './components/progessBar';
import Parent from './components/ChildToParent/parent';
import GetAPI from './components/GetAPI';
function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  console.log(editTodo);
  return (
    <div className="App">
      <>
        {/* <ProgessBar /> */}
        {/* <Todo input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />

        <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} /> */}
        {/* <Parent /> */}
        <GetAPI />
      </>
    </div>
  );
}

export default App;
