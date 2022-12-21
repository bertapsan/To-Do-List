import { ghPages } from "vite-plugin-gh-pages";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
  base: "/To-Do-List/",
  plugins: [ghPages({
    branch: "docs",
  }), react()]
})
