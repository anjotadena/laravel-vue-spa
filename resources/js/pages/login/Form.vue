<template>
    <form class="bg-white shadow-md px-8 pt-6 pb-8 mb-4 mx-auto self-center" @submit.prevent="onSubmitForm">
        <img class="h-24 w-24 mx-auto m-6" alt="auth-logo" src="https://cdn.pixabay.com/photo/2016/12/18/12/49/cyber-security-1915628_960_720.png" />
        <input v-model="form.email" class="w-full mb-2 border px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" type="email" name="email" placeholder="Your email" />
        <input v-model="form.password" class="w-full mb-2 border px-2 py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3" type="password" name="password" placeholder="Your password" />

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Login</button>
    </form>
</template>

<style lang="sass" scoped></style>

<script>
export default {
    data() {
        return {
            form: {
                email: 'test@admin.com',
                password: 'password'
            },
        };
    },

    methods: {
        onSubmitForm() {
            console.log(this.$data.form);
        }
    }
}
</script>
