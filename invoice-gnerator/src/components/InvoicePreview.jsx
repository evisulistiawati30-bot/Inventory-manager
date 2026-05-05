function InvoicePreview({ invoice }) {
    if (!invoice) return null

    const tanggal = new Date().toLocaleDateString('id-ID',{
        day: 'numeric', month: 'long', year: 'numeric'
    })
const nomorInvoice = 'INV-' + Date.now().toString().slice(-6)

    return (
    <div style={{
        margin: '32px auto', maxWidth: '600px',
        border: '1px solid #ccc', padding: '32px',
        background: '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ margin: 0 }}>INVOICE</h2>
        <div style={{ textAlign: 'right', fontSize: '13px', color: '#666' }}>
            <div><strong>{nomorInvoice}</strong></div>
            <div>{tanggal}</div>
        </div>
      </div>
        
        <hr style={{ margin: '20px 0', borderColor: '#1a1a2e' }} />

        <p><strong>Nama Klien:</strong> {invoice.namaKlien}</p>
        <p><strong>Nama Produk:</strong> {invoice.namaProduk}</p>
        <p><strong>Harga:</strong> Rp {Number(invoice.harga).toLocaleString('id-ID')}</p>

        <hr style={{ margin: '20px 0' }} />

        <p style={{ textAlign: 'right', fontSize: '18px', fontWeight: 'bold' }}>
            Total: Rp {Number(invoice.harga).toLocaleString('id-ID')}
        </p>
    
    <div style={{ marginTop: '24px', textAlign: 'center' }}>
        <button
         onClick={() => window.print()}
         style={{
            backgroundColor: '#1a1a2e', color: 'white',
            padding: '10px 32px', border: 'none',
            cursor: 'pointer', fontSize: '14px'
         }}>
            🖨️ Cetak / Simpan PDF
         </button>
    </div>
  </div>
    )
}
export default InvoicePreview