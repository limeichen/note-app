import { defineConfig } from 'vite';

export default defineConfig({
    base: process.env.VUE_APP_PUBLIC_PATH || '/',
});
