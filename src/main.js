import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import components from '@/components/UI'
import layouts from '@/layouts'
import store from '@/store'
import PrimeVue from 'primevue/config'

import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";

import '@/styles/global.scss'

const app = createApp(App)

components.forEach((component) => app.component(component.name, component))
layouts.forEach((layout) => app.component(layout.name, layout))

app.use(PrimeVue).use(router).use(store).mount('#app')
