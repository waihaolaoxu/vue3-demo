import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: [
            { find: '/@/', replacement: resolve(__dirname, 'src') }
        ]
    },
    optimizeDeps: {
        include: ['lodash']
    },
    server: {
        proxy: {}
    },
    plugins: [vue()],
})
