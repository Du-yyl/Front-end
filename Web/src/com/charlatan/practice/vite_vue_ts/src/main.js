import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import 'default-passive-events';
createApp(App).
    use(store).
    mount('#app');
//# sourceMappingURL=main.js.map