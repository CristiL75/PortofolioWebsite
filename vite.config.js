import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/PortofolioWebsite', // Numele exact al repository-ului tău
});
