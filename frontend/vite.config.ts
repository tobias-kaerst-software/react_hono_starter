import { lingui } from '@lingui/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react({ plugins: [['@lingui/swc-plugin', {}]] }), lingui()],
  resolve: { alias: [{ find: '$', replacement: fileURLToPath(new URL('src', import.meta.url)) }] },
});
