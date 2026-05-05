import { useState } from 'react'

function InvoiceForm({ onSubmit }) {
    const [namaKlien, setNamaKlien] = useState('')
    const [namaProduk, setNamaProduk] = useState('')
    const [harga, setHarga] = useState('')

    function handleSubmit() {
        if (!namaKlien || !namaProduk || !harga) {
            alert('Semua field wajib diisi!')
            return
        }
        onSubmit({ namaKlien, namaProduk, harga })
    }

    return (
    <div style={{ padding: '32px', maxWidth: '600px', margin: '0 auto' }}>
        <h2>Buat Invoice</h2>

        <div style={{ marginBottom: '16px' }}>
            <label>Nama Klien</label><br/>
            <input type="text" placeholder="Masukan nama klien"
              value={namaKlien}
              onChange={(e) => setNamaKlien(e.target.value)}
              style={{ width: '100%', padding: '8px', marginTop: '4px' }}/>
        </div>
        
        <div style={{ marginBottom: '16px' }}>
            <label>Nama Produk</label><br/>
            <input type="text" placeholder="Masukan nama produk"
             value={namaProduk}
             onChange={(e) => setNamaProduk(e.target.value)}
             style={{ width: '100%', padding: '8px', marginTop: '4px' }}/>
        </div>

        <div style={{ marginBottom: '16px' }}>
            <label>Harga (Rp)</label><br/>
            <input type="number" placeholder="0"
             value={harga}
             onChange={(e) => setHarga(e.target.value)}
             style={{ wiidth: '100%', padding: '8px', marginTop: '4px' }}/>
        </div>

        <button onClick={handleSubmit} style={{
            backgroundColor: '#1a1a2e', color: 'white',
            padding: '10px 24px', border: 'none', cursor: 'pointer'
        }}>
            Buat Invoice
        </button>
    </div>

    )
}
export default InvoiceForm