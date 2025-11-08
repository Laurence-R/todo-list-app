export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <li className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            {/* Check */}
            <input 
                type="checkbox"
                checked={todo.complete}
                onChange={() => toggleTodo(todo.id)}
                className="h-5 w-5 rounded border-gray-300 focus:ring-blue-500"
            />

            {/* Task */}
            <span className={`flex-1 ${todo.complete ? "line-through text-gray-500" : ""}`}>
                {todo.task}
            </span>

            {/* Delete Button */}
            <button 
                className="bg-red-500 px-4 py-2 rounded-lg cursor-pointer text-white focus:outline-none hover:-translate-y-1 transition duration-300 ease-in-out"
                onClick={() => deleteTodo(todo.id)}
            >
                刪除
            </button>
        </li>
    )
}