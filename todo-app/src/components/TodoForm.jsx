import { useState } from 'react'

function TodoForm({ onAdd }) {
    const [teks, setTeks] = useState('')

    function handleSubmit() {
        if (!teks.trim()) {
            alert('Tulis todo dulu!')
            return
        }
        onAdd(teks)
        setTeks('')
    }

    return ( 
         <div style={{ teksAlign: 'center', padding: '20px' }}>
            <input
             type="text"
             placeholder="Tulis tugas baru..."
             value={teks}
             onChange={(e) => setTeks(e.target.value)}
             style={{ padding: '8px', width: '300px', marginRight: '8px' }}
            />
            <button
            onClick={handleSubmit}
            style={{
                padding: '8px 16px',
                backgroundColor: '#4f46e5',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
            }}>
                Tambah
            </button>
    </div>
    )
}
export default TodoForm