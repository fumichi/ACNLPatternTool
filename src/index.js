import Vue from 'vue';
import 'reset-css';
import App from '/App.vue';
import router from '/routers'; // use router
import i18n from '/i18n'; // use i18n
import PortalVue from "portal-vue";
import { ifProdExec } from '/utils/if-env';
import logger from '/utils/logger';

// vue global config
Vue.config.productionTip = false;
ifProdExec(() => {
  Vue.config.devtools = false;
});

// More Vue plugins
Vue.use(PortalVue);

// mount the application
new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// add this query string to url to see: '?log=info'
logger.info("Application mounted.");