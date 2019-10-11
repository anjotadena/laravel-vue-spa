<template>
    <div class="bg-light">
        <div class="container mx-auto">
            <!-- <Header /> -->
            <div class="">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .bg-light {
        background-color: #f7fafc;
    }
</style>

<script>
import Header from './../components/Header';

export default {
    name: 'Main',
    components: {
        Header
    },
	data() {
		return {
			message: 'Main App'
		};
	}
}
</script>
