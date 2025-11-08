export default function TodoInput({ newTodo, setNewTodo, addTodo }) {
    return (
        <form onSubmit={addTodo} className="mb-6">
            <div className="flex gap-2">
                <input 
                    type="text" 
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500 "
                    placeholder="Add Task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button
                    type="submit"
                    className="rounded-lg bg-blue-500 text-white px-4 hover:bg-blue-600 hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer"
                >
                    新增任務
                </button>
            </div>
        </form>
    )
}