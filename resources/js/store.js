import { getLocalUser } from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        message: 'Hello, World from store!',
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null,
        customers: [],
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.authError = null;
        },
        loginSuccess(state, payload) {
            console.log('PAYLOAD: ', payload);
            state.authError = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, { token: payload.access_token });
            console.log('HERE');
            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.authError = payload.error;
        },
        logout(state) {
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    },
    getters: {
        message(state) {
            return state.message;
        },
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        authError(state) {
            return state.authError;
        },
        currentUser(state) {
            return state.currentUser;
        },
        customers(state) {
            return state.customers;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        }
    },
};
