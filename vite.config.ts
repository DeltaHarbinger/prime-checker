/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom"
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': resolve(__dirname, "./src")
    }
  }
})
