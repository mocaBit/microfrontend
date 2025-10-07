import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    target: 'node',
    distPath: {
      root: 'dist',
    },
  },
  source: {
    entry: {
      index: './src/index.js',
    },
  },
  tools: {
    rspack: {
      output: {
        library: {
          type: 'module',
        },
      },
      experiments: {
        outputModule: true,
      },
      externals: {
        react: 'react',
        'react-dom': 'react-dom',
      },
    },
  },
});
