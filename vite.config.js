import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import Vue from "@vitejs/plugin-vue"; //add this line
import laravel from 'laravel-vite-plugin';

import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'


export default defineConfig({
    plugins: [
        Components({
            deep: true,
            dirs: ['resources/js/Bricks', 'resources/js/Components', 'resources/js/Layouts'],
        }),
        Vue({
            include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
        }),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            ssr: 'resources/js/ssr.js',
        }),
        Markdown({ /* options */ }),
    ],
});