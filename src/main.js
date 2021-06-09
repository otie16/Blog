// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

Vue.filter("to-uppercase", value => {
  return value.toUpperCase();
});

Vue.filter("snippet", value => {
  return value.slice(0, 100) + '...';
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
