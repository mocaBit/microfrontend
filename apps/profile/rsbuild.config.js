import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 3003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  dev: {
    assetPrefix: 'http://localhost:3003',
  },
  output: {
    assetPrefix: 'http://localhost:3003',
  },
  html: {
    template: './public/index.html',
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'profile',
      exposes: {
        './ProfileApp': './src/ProfileApp',
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
