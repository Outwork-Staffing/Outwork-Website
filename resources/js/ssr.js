import { createApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'

const appName = 'Outwork Staffing';

createServer(page =>
    createApp({
        page,
        render: renderToString,
        resolve: (name) => resolvePageComponent(`/pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ App, props, plugin }) {
            return createInertiaApp({
                render: () => h(App, props),
            }).use(plugin)
        },
    }),
)