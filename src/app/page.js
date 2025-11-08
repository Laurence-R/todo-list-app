'use client'
import { useState } from 'react'
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'

export default function Home() {
	const [todos, setTodos] = useState([])	// 每個 todo 都有自己的 id, task, complete
	const [newTodo, setNewTodo] = useState('') 	// 新的輸入內容

	const addTodo = (e) => {
		e.preventDefault();

		if(newTodo.trim()){
			setTodos([...todos, {
				id: Date.now(),
				task: newTodo.trim(),
				complete: false
			}])
			setNewTodo('');
		}
	}

	const toggleTodo = (todo_id) => {
		setTodos(todos.map(todo => 
			todo.id === todo_id ? { ...todo, complete: !todo.complete } : todo
		));
	}

	const deleteTodo = (todo_id) =>{
		setTodos(todos.filter(todo => todo.id !== todo_id))
	}

	return (
		<div className="min-h-screen bg-gray-100 py-8">
			<div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
				{/* Heading */}
				<h1 className="text-xl font-bold mb-3">My Todo List</h1>
				
				{/* Todo Input Form */}
				<TodoInput 
					newTodo={newTodo}
					setNewTodo={setNewTodo}
					addTodo={addTodo}
				/>

				{/* Todo Task List */}
				<TodoList 
					todos={todos}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			</div>
		</div>
	)
}