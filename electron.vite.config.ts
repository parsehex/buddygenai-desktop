import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    root: resolve(__dirname, './src/no-op'),
    build: {
      outDir: resolve(__dirname, './out/no-op'),
      rollupOptions: {
        input: resolve(__dirname, './src/no-op/index.html'),
      }
    }
  }
})
