<template>
    <div>
        <div id="main">
            <Header />
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

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
