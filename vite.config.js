import { defineConfig } from 'vite'
import { svgSpritemap } from 'vite-plugin-svg-spritemap';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgSpritemap({
            pattern: 'icons/**/*.svg',
            prefix: 'icon',
        })
    ],
})

