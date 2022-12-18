const TodoList = ({ todos, setTodos,setEditTodo,editTodo }) => {
  
    const deleteTodo = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodos = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <>
      {todos?.map((todo) => (
        <h1 key={todo.id}>
          {todo.title}{' '}
          {/* <span onClick={() => deleteTodo(todo)}>
            <i>de</i>
          </span> */}
          <span onClick={() => editTodos(todo)}>
            <i>Edit</i>
          </span>
        </h1>
      ))}
    </>
  );
};

export default TodoList;
