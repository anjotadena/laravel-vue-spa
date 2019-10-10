require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Main from './containers/Main'
import { routes } from './routes';
import StoreData from './store';
import { getLocalUser } from './helpers/auth';


Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const user = store.state.currentUser;

    if (requiresAuth && !user) {
        next('/login');
    } else if (to.path === '/login' && user) {
        next('/');
    } else {
        next();
    }
});

const store = new Vuex.Store(StoreData);

const app = new Vue({
    el: '#app',
    router,
    store,
    // GLOBAL COMPONENTS
    components: {
        'main-app': Main,
    }
});
