import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todo = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  useEffect(()=> {
    if(editTodo){
      setInput(editTodo.title)
    }else setInput("")

  },[editTodo, setInput]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      // eslint-disable-next-line no-unused-expressions
      todo.id === id ? { title, id, completed } : todo;
    });
    setTodos(newTodo);
    setEditTodo('');
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          required
          placeholder="Enter a value ..."
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Todo;
