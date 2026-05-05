import { useState } from 'react'
import Header from './components/Header'
import InvoiceForm from './components/InvoiceForm'
import InvoicePreview from './components/InvoicePreview'

function App() {
  const [invoice, setInvoice] = useState(null)

  return  (
    <div>
      <Header />
      <InvoiceForm onSubmit={setInvoice} />
      {invoice && <InvoicePreview invoice={invoice} />}
    </div>
  )
}
export default App