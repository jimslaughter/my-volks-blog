// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

function safeUrl(u) {
  try {
    if (!u) return undefined;
    return new URL(u).toString();   // throws if invalid
  } catch {
    return undefined;
  }
}

const siteEnv = safeUrl(process.env.SITE);
const cfEnv   = safeUrl(process.env.CF_PAGES_URL);

export default defineConfig({
  site: siteEnv ?? cfEnv ?? 'http://localhost:4321',
  base: process.env.BASE_PATH || undefined,
  integrations: [mdx()],
  markdown: { shikiConfig: { theme: 'github-dark', wrap: true } },
});
