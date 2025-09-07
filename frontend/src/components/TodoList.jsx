import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }) => {
    if(!Array.isArray(todos) || todos.length === 0) {
        return <p>No todos found. Add a new one!</p>
    }

    return (
        <div className="todo-list">
            {todos.map((todo)=> (
                <TodoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={onToggleTodo}
                onDeleteTodo={onDeleteTodo}
                />
            ))}
        </div>
    )
}

export default TodoList