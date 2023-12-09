import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';

import Components from 'unplugin-vue-components/vite'


export default defineConfig({
    plugins: [
        Components({
            deep: true,
            dirs: ['resources/js/Blocks', 'resources/js/Components', 'resources/js/Layouts'],
        }),
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
