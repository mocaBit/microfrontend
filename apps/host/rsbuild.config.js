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
  ],
});
