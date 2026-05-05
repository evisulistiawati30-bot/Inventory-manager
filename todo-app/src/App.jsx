import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  function tambahTodo(teks) {
    setTodos([...todos, { id: Date.now(), teks, selesai: false}])
  }

  function hapusTodo(id) {
    setTodos(todos.filter(t => t.id !== id))
  }

  function toggleSelesai(id) {
    setTodos(todos.map( t =>
      t.id === id ? { ...t, selesai: ! t.selesai } : t
    ))
  }

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Todo App</h1>
      <TodoForm onAdd={tambahTodo}/>
      <TodoList todos={todos} onHapus={hapusTodo} onToggle={toggleSelesai} />
    </div>
  )
}
export default App