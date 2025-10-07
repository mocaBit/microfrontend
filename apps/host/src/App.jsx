import React, { Suspense, lazy } from 'react';

const ProductsApp = lazy(() => import('products/ProductsApp'));
const CartApp = lazy(() => import('cart/CartApp'));
const ProfileApp = lazy(() => import('profile/ProfileApp'));

function App() {
  const [currentView, setCurrentView] = React.useState('products');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        background: '#282c34',
        padding: '20px',
        color: 'white',
        marginBottom: '20px'
      }}>
        <h1>Microfrontend Dashboard</h1>
        <nav style={{ marginTop: '10px' }}>
          <button
            onClick={() => setCurrentView('products')}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              cursor: 'pointer',
              background: currentView === 'products' ? '#61dafb' : '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Products
          </button>
          <button
            onClick={() => setCurrentView('cart')}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              cursor: 'pointer',
              background: currentView === 'cart' ? '#61dafb' : '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Cart
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              background: currentView === 'profile' ? '#61dafb' : '#fff',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            Profile
          </button>
        </nav>
      </header>

      <main style={{ padding: '0 20px' }}>
        <Suspense fallback={<div>Loading...</div>}>
          {currentView === 'products' && <ProductsApp />}
          {currentView === 'cart' && <CartApp />}
          {currentView === 'profile' && <ProfileApp />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
