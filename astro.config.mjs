// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jeansbutton.pro',
  integrations: [sitemap()],
  fonts: [
    {
      name: 'Playfair Display',
      cssVariable: '--font-serif',
      provider: fontProviders.fontsource(),
    },
    {
      name: 'Inter',
      cssVariable: '--font-sans',
      provider: fontProviders.fontsource(),
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      provider: fontProviders.fontsource(),
    },
  ],
});

