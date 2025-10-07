const products = [
  { id: 1, name: 'Laptop', price: 999, image: '💻' },
  { id: 2, name: 'Phone', price: 699, image: '📱' },
  { id: 3, name: 'Headphones', price: 199, image: '🎧' },
  { id: 4, name: 'Watch', price: 299, image: '⌚' },
  { id: 5, name: 'Tablet', price: 499, image: '📱' },
  { id: 6, name: 'Camera', price: 799, image: '📷' },
];

function ProductsApp() {
  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div>
      <h2>Products Catalog</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        This is a microfrontend running on port 3001
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>
              {product.image}
            </div>
            <h3>{product.name}</h3>
            <p style={{ fontSize: '20px', color: '#2ecc71', fontWeight: 'bold' }}>
              ${product.price}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: '10px 20px',
                background: '#3498db',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsApp;
