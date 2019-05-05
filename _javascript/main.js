// noinspection ES6UnusedImports
import style from '../_sass/main.scss';
import Vue from "vue";
import App from './main.vue'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
import VueFullpage from 'fullpage-vue'

Vue.use(VueFullpage);

new Vue({
    el: '#app',
    render: h => h(App)
});

