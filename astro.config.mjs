// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: "https://fredara.github.io",
  base: "/Refull-App",
  integrations: [tailwind()],
});
