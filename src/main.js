import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import axios from 'axios'

const EventBus = new Vue();

Vue.config.productionTip = false
Vue.prototype.$http = axios

Object.defineProperties(Vue.prototype, {
    $bus: {
        get() {
            return EventBus;
        }
    }
});

new Vue({
    render: h => h(App),
    store
}).$mount('#app')
