import { useTodos } from "../hooks/useTodos";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import "../components/common/style.css";

const TodoPage = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, loading, error } = useTodos();

  if (loading) {
    return (
      <div className="text-center mt-8 text-gray-700">Loading todo...</div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoPage;
