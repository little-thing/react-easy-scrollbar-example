import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-easy-scrollbar': path.resolve(process.cwd(), '../'),
    },
  },
})