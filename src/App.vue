<template lang="pug">
main
	Article
</template>

<script>
import Article from '@/components/Article'

export default {
    components:{ Article },
}
</script>

<style lang="less">
    @import url('./pug-less/less/index.less');
	body{background-color: @bg-color;}
	main{
		//width: 1440px;
		margin: 0 auto;
		background-color: @bg-color;
	}
</style>