function TodoList({ todos, onHapus, onToggle }) {
    if (todos.lenght === 0) {
        return <p style={{ textAlign: 'center', color: '#888' }}>
            Belum ada tugas. Tambah sekarang!
        </p>
    }

    return (
    <ul style={{ listStyle: ' none', padding: 0 }}>
        {todos.map(todo => (
            <li key={todo.id} style={{
                padding: '12px 16px', marginBottom: '8px',
                backgroundColor: todo.selesai ? '#d1fae5': '#f3f4f6',
                 borderRadius: '8px'
            }}>
                <span
                onClick={() => onToggle(todo.id)}
                style={{
                    cursor: 'pointer',
                    textDecoration: todo.selesai ? 'line-through': 'none',
                }}>
            {todo.selesai ? '✅' : '⬜'} {todo.teks}
         </span>
         <button
         onClick={() => onHapus(todo.id)}
         style={{
            backgroundColor: '#ef4444', color: 'white',
            border: 'none', borderRadius: '4px',
            padding: '4px 10px', cursor: 'pointer'
         }}>
            Hapus
         </button>
            </li>
        ))}
        </ul>
    )
}
export default TodoList