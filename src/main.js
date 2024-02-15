import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import * as VueGoogleMaps from 'vue2-google-maps'



const app = createApp(App)

app.use(router)

app.mount('#app')

