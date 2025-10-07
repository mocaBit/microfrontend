import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from '@microfrontend-app/shared-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
