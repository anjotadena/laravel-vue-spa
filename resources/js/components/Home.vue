<template>
    <div>
        <h1>Hello</h1>
    </div>
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
