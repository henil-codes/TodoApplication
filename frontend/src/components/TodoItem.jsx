const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }) => {
  const handleToggle = () => {
    onToggleTodo(todo.id, !todo.is_done);
  };

  const handleDelete = () => {
    onDeleteTodo(todo.id);
  };

  return (
    <div className={`todo-item ${todo.is_done ? "completed" : ""}`}>
      <div className="todo-content">
        <h3 className="todo-title">{todo.title}</h3>
        {todo.description && (
          <p className="todo-description">{todo.description}</p>
        )}
      </div>

      <div className="todo-actions">
        <input type="checkbox" checked={todo.is_done} onChange={handleToggle} />

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
