import './bootstrap';
import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h } from 'vue';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

const id = 'app';
const el = document.getElementById(id);
const pages = import.meta.glob('./Pages/**/*.vue');

const initialPage = (() => {
    if (!el) {
        return null;
    }

    if (el.dataset.page) {
        return JSON.parse(el.dataset.page);
    }

    const page = document.querySelector(`script[data-page="${id}"]`);

    return page?.textContent ? JSON.parse(page.textContent) : null;
})();

if (!el || !initialPage) {
    console.warn('Inertia root page payload was not found.');
} else {
    createInertiaApp({
        id,
        page: initialPage,
        resolve: (name) => {
            const page = pages[`./Pages/${name}.vue`];

            if (!page) {
                throw new Error(`Unknown Inertia page: ${name}`);
            }

            return page().then((module) => module.default);
        },
        setup({ el, App, props, plugin }) {
            createApp({ render: () => h(App, props) })
                .use(plugin)
                .mount(el);
        },
    });
}
