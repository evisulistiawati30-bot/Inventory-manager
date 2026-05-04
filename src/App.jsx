import { useState } from 'react'
import './App.css';

function App() {
  const [produk, setProduk] = useState([])
  const [nama, setNama] = useState('')
  const [kategori, setKategori] = useState('')
  const [stok, setStok] = useState('')
  const [harga, setHarga] = useState('')
  const [search, setSearch] = useState('')

  const tambah = () => {
    if (!nama ||!kategori ||!stok ||!harga) return
    setProduk([...produk, {nama, kategori, stok, harga, id: Date.now()}])
    setNama('')
    setKategori('')
    setStok('')
    setHarga('')
  }
  const hapus = (id) => {
    setProduk(produk.filter(p => p.id !== id))
  }
  const filtered = produk.filter(p => 
    p.nama.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="container">
      <h1>📦 Manajemen Inventaris</h1>

      <div className="form-box">
        <input placeholder="Nama Produk" value={nama} onChange={e => setNama(e.target.value)} />
        <input placeholder="Kategori" value={kategori} onChange={e => setKategori(e.target.value)} />
        <input placeholder="Stok" type="number" value={stok} onChange={e => setStok(e.target.value)} />
        <input placeholder="Harga (RP)" type="number" value={harga} onChange={e => setHarga(e.target.value)} />
        <button onClick={tambah}>+ Tambah</button>
      </div>

      <input className="search" placeholder="🔍 Cari produk..." value={search} onChange={e => setSearch(e.target.value)} />

      <table>
        <thead>
          <tr>
            <th>Nama Produk</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr><td colSpan="5" style={{textAlign:'center'}}>Belum ada Produk</td></tr>
          ) : filtered.map(p => (
            <tr key={p.id}>
              <td>{p.nama}</td>
              <td>{p.kategori}</td>
              <td>{p,stok}</td>
              <td>Rp {Number(p.harga).toLocaleString('id-ID')}</td>
              <td>
                <button className="edit" onClick={() => mulaiEdit(p)}>✏️ edit</button>
                <button className="hapus" onClick={() => hapus(p.id)}>🗑️ hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default App