import { Card, Button, Badge } from '@microfrontend-app/shared-ui';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻', stock: 'in-stock' },
  { id: 2, name: 'Phone', price: 699, image: '📱', stock: 'in-stock' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧', stock: 'low-stock' },
  { id: 4, name: 'Watch', price: 299, image: '⌚', stock: 'in-stock' },
  { id: 5, name: 'Tablet', price: 499, image: '📱', stock: 'out-of-stock' },
  { id: 6, name: 'Camera', price: 799, image: '📷', stock: 'in-stock' },
];

function ProductsApp({ cartContext }) {
  const addToCart = cartContext?.addToCart || (() => console.log('Cart not available'));

  const handleAddToCart = (product) => {
    if (product.stock === 'out-of-stock') {
      alert(`${product.name} is currently out of stock!`);
    } else {
      addToCart(product);
      // Show success feedback
      const message = document.createElement('div');
      message.textContent = `✓ ${product.name} added to cart!`;
      message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: #28a745; color: white; padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 9999; animation: slideIn 0.3s ease;';
      document.body.appendChild(message);
      setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => document.body.removeChild(message), 300);
      }, 2000);
    }
  };

  const getStockBadge = (stock) => {
    if (stock === 'in-stock') return <Badge variant="success">In Stock</Badge>;
    if (stock === 'low-stock') return <Badge variant="warning">Low Stock</Badge>;
    return <Badge variant="danger">Out of Stock</Badge>;
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Products Catalog</h2>
        <p style={{ color: '#666', marginTop: '8px' }}>
          This is a microfrontend running on port 3001
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {products.map(product => (
          <Card
            key={product.id}
            title={product.name}
            subtitle={`$${product.price}`}
            padding="16px"
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', margin: '20px 0' }}>
                {product.image}
              </div>
              <div style={{ marginBottom: '12px' }}>
                {getStockBadge(product.stock)}
              </div>
              <Button
                variant="primary"
                onClick={() => handleAddToCart(product)}
                disabled={product.stock === 'out-of-stock'}
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductsApp;
