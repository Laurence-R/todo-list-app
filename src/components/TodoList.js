import TodoItem from "./TodoItem";

export default function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="space-y-3">
            {[...todos].sort((a, b) => {
                if (a.complete === b.complete) return 0;
                return a.complete ? 1 : -1;
            }).map((todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}