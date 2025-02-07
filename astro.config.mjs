// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://spectacular-pegasus-e308d2.netlify.app/",
  integrations: [preact()]
});