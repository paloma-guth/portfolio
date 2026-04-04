import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 1. Keep your Integrations
  integrations: [react()],
  
  // 2. Add your Deployment Info
  site: 'https://paloma-guth.github.io',
  base: '/portfolio', 
});