import { useState, useEffect } from "react";
import * as todoService from "../services/todoService";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const data = await todoService.getTodos();
      setTodos(data);
    } catch (err) {
      setError("Failed to fetch todos.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (newTodo) => {
    try {
      const addedTodo = await todoService.addTodo(newTodo);
      setTodos((prevTodos) => [addedTodo, ...prevTodos]);
    } catch (err) {
      setError("Failed to add todo.");
      console.error(err);
    }
  };

  const toggleTodo = async (id, isDone) => {
    try {
      const updatedTodo = { is_done: isDone };
      await todoService.toggleTodo(id, updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, is_done: isDone } : todo
        )
      );
    } catch (err) {
      setError("Failed to update todo.");
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError("Failed to delete todo.");
      console.error(err);
    }
  };

  return { todos, addTodo, toggleTodo, deleteTodo, loading, error };
};
