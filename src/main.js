import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueResource);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
