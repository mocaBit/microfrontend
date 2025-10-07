import { useState } from 'react';
import { Card, Button, Badge } from '@microfrontend-app/shared-ui';

const initialCartItems = [
  { id: 1, name: 'Laptop', price: 999, quantity: 1, image: '💻' },
  { id: 2, name: 'Phone', price: 699, quantity: 2, image: '📱' },
];

function CartApp() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + delta) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Shopping Cart</h2>
        <p style={{ color: '#666', marginTop: '8px' }}>
          This is a microfrontend running on port 3002
        </p>
      </div>

      {cartItems.length === 0 ? (
        <Card padding="40px">
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '64px', margin: '0 0 20px 0' }}>🛒</p>
            <p style={{ fontSize: '18px', color: '#666', margin: 0 }}>Your cart is empty</p>
          </div>
        </Card>
      ) : (
        <>
          <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {cartItems.map(item => (
              <Card key={item.id} padding="16px">
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{ fontSize: '40px' }}>
                    {item.image}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 4px 0' }}>{item.name}</h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                      ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Button
                      variant="danger"
                      size="small"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </Button>
                    <Badge variant="primary">{item.quantity}</Badge>
                    <Button
                      variant="success"
                      size="small"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </Button>
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card padding="20px">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}>
              <h3 style={{ margin: 0, fontSize: '20px' }}>Total:</h3>
              <p style={{
                margin: 0,
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#28a745'
              }}>
                ${total.toFixed(2)}
              </p>
            </div>
            <Button
              variant="primary"
              size="large"
              onClick={() => alert('Proceeding to checkout...')}
            >
              Checkout
            </Button>
          </Card>
        </>
      )}
    </div>
  );
}

export default CartApp;
