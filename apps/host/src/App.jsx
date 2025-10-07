import React, { Suspense, lazy } from 'react';
import { Button, Badge } from '@microfrontend-app/shared-ui';

const ProductsApp = lazy(() => import('products/ProductsApp'));
const CartApp = lazy(() => import('cart/CartApp'));
const ProfileApp = lazy(() => import('profile/ProfileApp'));

function App() {
  const [currentView, setCurrentView] = React.useState('products');

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f5f5f5' }}>
      <header style={{
        background: '#282c34',
        padding: '20px',
        color: 'white',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0 }}>Microfrontend Dashboard</h1>
            <Badge variant="info" size="small" style={{ marginTop: '8px' }}>Rsbuild + Module Federation 2.0</Badge>
          </div>
        </div>
        <nav style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <Button
            variant={currentView === 'products' ? 'primary' : 'outline'}
            onClick={() => setCurrentView('products')}
          >
            Products
          </Button>
          <Button
            variant={currentView === 'cart' ? 'primary' : 'outline'}
            onClick={() => setCurrentView('cart')}
          >
            Cart
          </Button>
          <Button
            variant={currentView === 'profile' ? 'primary' : 'outline'}
            onClick={() => setCurrentView('profile')}
          >
            Profile
          </Button>
        </nav>
      </header>

      <main style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading...</div>}>
          {currentView === 'products' && <ProductsApp />}
          {currentView === 'cart' && <CartApp />}
          {currentView === 'profile' && <ProfileApp />}
        </Suspense>
      </main>
    </div>
  );
}

export default App;
