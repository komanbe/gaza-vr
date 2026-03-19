import { defineConfig } from 'vite';

export default defineConfig({
  base: '/gaza-vr/',
  server: {
    host: true,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@lumaai/luma-web'],
    },
  },
  assetsInclude: ['**/*.splat', '**/*.ply', '**/*.ksplat'],
});
