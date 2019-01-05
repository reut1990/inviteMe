import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as VueGoogleMaps from "vue2-google-maps";

// window.EventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDF3f56gvRPFegF_slEJon1k-JVgPL21XA",
   libraries: "places" // necessary for places input
  }
});

window.vm =
  new Vue({
    router,
    store,
    render: h => h(App),
    created() {
      window.addEventListener('scroll', this.handleScroll);
    },
    data() {
      return {
        isActive: false
      }
    },
    methodes: {
      handleScroll() {
        const els = document.querySelectorAll('.scrollme')
        els.forEach((el) => {
          const elTop = el.getBoundingClientRect().top
          const elBottom = el.getBoundingClientRect().bottom
          // console.log(elBottom)
          if (elTop >= 0 || elBottom <= 0) {
            this.isActive = false
          } if (elTop <= 0 && elBottom >= 0) {
            this.isActive = true
          }
        })
      }
    }
  }).$mount('#app')

  Vue.filter('two_digits', (value) => {
    if (value < 0) {
      return '00';
    }
    if (value.toString().length <= 1) {
      return `0${value}`;
    }
    return value;
  });

  
