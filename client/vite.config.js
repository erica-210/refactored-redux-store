import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '@redux': '/path/to/your/redux', // Adjust the path to your Redux directory
    },
  },
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxInject: `import React from 'react';`,
  },
});
