// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://fredara.github.io",
  base: "/Refull-App",
  integrations: [tailwind()],
  build: {
    // Optimize for performance
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  vite: {
    build: {
      // Optimize chunks
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro'],
          },
        },
      },
    },
  },
});
