import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import Router from './router';

import { registerLayouts } from './core';

const app = createApp(App);

registerLayouts(app);

app.use(Router);

app.mount('#app')
