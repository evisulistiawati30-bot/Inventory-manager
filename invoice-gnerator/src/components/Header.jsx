function Header() {
    return (
        <header style={{
            backgroundColor: '#1a1a2e',
            color: 'white',
            padding: '16px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
         }}>
            <h1 style={{ margin: 0, fontSize: '20px'}}>
                📃 Invoice Generator
            </h1>
            <span style={{ fontSize: '13px', opacity: 0.7 }}>
                Kelola invoice dengan mudah
            </span>
         </header>
    )
}
export default Header