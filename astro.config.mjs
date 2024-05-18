import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), db()],
  output: "server",
  adapter: vercel()
});