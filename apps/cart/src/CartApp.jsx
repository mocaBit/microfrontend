import { Card, Button, Badge } from '@microfrontend-app/shared-ui';

function CartApp({ cartContext }) {
  const {
    cartItems = [],
    updateQuantity = () => {},
    removeFromCart = () => {},
    totalPrice = 0,
    clearCart = () => {},
  } = cartContext || {};

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
                      onClick={() => removeFromCart(item.id)}
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
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Button
                variant="primary"
                size="large"
                onClick={() => alert('Proceeding to checkout...')}
              >
                Checkout
              </Button>
              <Button
                variant="secondary"
                size="large"
                onClick={() => {
                  if (confirm('Are you sure you want to clear the cart?')) {
                    clearCart();
                  }
                }}
              >
                Clear Cart
              </Button>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

export default CartApp;
