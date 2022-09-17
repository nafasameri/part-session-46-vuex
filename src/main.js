import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

require('./assets/style.css');

createApp(App).use(store).mount('#app')
