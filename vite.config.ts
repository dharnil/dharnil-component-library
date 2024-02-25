import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      name: 'dharnil-component-library'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          Vue: 'vue'
        }
      }
    }
  }
})