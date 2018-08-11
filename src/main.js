import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from "vue-material";
import BootstrapVue from "bootstrap-vue";
import $ from "jquery";
import popper from "popper.js";
import './registerServiceWorker';
import "vue-material/dist/vue-material.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueMaterial, $, BootstrapVue, popper);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
