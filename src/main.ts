import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { createI18n, useI18n } from 'vue-i18n';
import { languages } from './i18n';
import { defaultLocale } from './i18n';

const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
    },
});

const localStorageLang = localStorage.getItem('lang');

const messages = Object.assign(languages);

const i18n = createI18n({
    legacy: false,
    locale: localStorageLang || defaultLocale,
    messages,
});

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount('#app');
