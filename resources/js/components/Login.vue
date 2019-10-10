<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="handleFormSubmit">
            <input type="text" placeholder="email" v-model.trim="email"/>
            <input type="password" placeholder="password" v-model="password"/>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import { login } from './../helpers/auth';

export default {
	data() {
		return {
            email: '',
            password: '',

            error: null,
		};
    },
    methods: {
        handleFormSubmit() {
            this.$store.dispatch('login');

            login({
                email: this.$data.email,
                password: this.$data.password,
            })
            .then((response) => {
                this.$store.commit('loginSuccess', response);
                this.$router.push('/');
            })
            .catch((error) => {
                this.$store.commit('loginFailed', { error });
            });
        }
    }
}
</script>
