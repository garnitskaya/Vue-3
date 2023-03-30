import { createApp } from 'vue'
import App from '@/App.vue'
import router from "@/router"
import components from '@/components/UI'
import layouts from '@/layouts'
import store from '@/store'

import '@/styles/global.scss'

const app = createApp(App)

components.forEach(component => app.component(component.name, component))
layouts.forEach(layout => app.component(layout.name, layout))

app
  .use(router)
  .use(store)
  .mount('#app')
