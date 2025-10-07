import { useState } from 'react';

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
      <h2>Shopping Cart</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        This is a microfrontend running on port 3002
      </p>

      {cartItems.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          background: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <p style={{ fontSize: '48px' }}>🛒</p>
          <p style={{ fontSize: '18px', color: '#666' }}>Your cart is empty</p>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '20px' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                marginBottom: '10px',
                background: 'white'
              }}>
                <div style={{ fontSize: '32px', marginRight: '15px' }}>
                  {item.image}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                  <p style={{ margin: 0, color: '#666' }}>${item.price}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    style={{
                      padding: '5px 10px',
                      background: '#e74c3c',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: '30px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    style={{
                      padding: '5px 10px',
                      background: '#2ecc71',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      padding: '5px 15px',
                      background: '#95a5a6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      marginLeft: '10px'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: '20px',
            background: '#f8f9fa',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h3 style={{ margin: 0 }}>Total:</h3>
            <p style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#2ecc71'
            }}>
              ${total.toFixed(2)}
            </p>
          </div>

          <button style={{
            marginTop: '20px',
            padding: '15px 30px',
            background: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%'
          }}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartApp;
