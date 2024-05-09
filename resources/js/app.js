import { createApp, createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        let page = pages[`./pages/${name}.vue`]
        return page
    },
    setup({ el, App, props, plugin }) {
        createSSRApp({progress: {
                delay: 50,
                color: '#50B780',
                includeCSS: true,
                showSpinner: false,
            }, render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
