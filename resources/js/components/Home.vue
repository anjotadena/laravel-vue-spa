<template>
	<h1>{{ message }}</h1>
</template>

<script>
export default {
    computed: {
        message() {
            return this.$store.getters.message;
        }
    },
	data() {
		return {
		};
	}
}
</script>
