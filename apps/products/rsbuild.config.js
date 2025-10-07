import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  dev: {
    assetPrefix: 'http://localhost:3001',
  },
  output: {
    assetPrefix: 'http://localhost:3001',
  },
  html: {
    template: './public/index.html',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'products',
      exposes: {
        './ProductsApp': './src/ProductsApp',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        '@microfrontend-app/shared-ui': {
          singleton: true,
        },
      },
    }),
  ],
});
