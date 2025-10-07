import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  dev: {
    assetPrefix: 'http://localhost:3000',
  },
  output: {
    assetPrefix: 'http://localhost:3000',
  },
  html: {
    template: './public/index.html',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'host',
      remotes: {
        products: 'products@http://localhost:3001/mf-manifest.json',
        cart: 'cart@http://localhost:3002/mf-manifest.json',
        profile: 'profile@http://localhost:3003/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
          eager: true,
        },
        '@microfrontend-app/shared-ui': {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],
});
