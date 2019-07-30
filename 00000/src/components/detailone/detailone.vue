<template>
	<div class="detailone">
		<div class="nav">
			<router-link to="/detailone/coursetwo" tag="div" exact>{{date.active1}}</router-link>
			<router-link to="/detailone/catalogtwo" tag="div">{{date.active2}}</router-link>
			<router-link to="/detailone/evaluatetwo" tag="div">{{date.active3}}</router-link>
		</div>
		<div class="bottom">
			<div class="wone">￥9.90</div>
			<div class="wtwo">
				<span class="iconfont">&#xe60f;</span>
				<p>分享</p>
			</div>
			<div class="wthree">
				<span class="iconfont">&#xe639;</span>
				<p>收藏</p>
			</div>
			<div class="wfour" @click="study">加入学习</div>
		</div>
		<div class="view">
			<router-view :date="date"></router-view>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'vant';
	Vue.use(Toast);
	import Vue from 'vue'
	export default {
		name: 'detailone',
		data() {
			return {
				date: {}
			}
		},
		created() {
			this.date = this.$route.params
		},
		methods: {
			study(){
				this.$store.commit("add",{
					photourl:this.date.photourl,
					name:this.date.name,
					name1:this.date.name1,
					price:this.date.price
				})
				Toast("加入订单成功")
			}
		},


	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_juvt34o7hx.eot');
		src: url('//at.alicdn.com/t/font_1307877_juvt34o7hx.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1307877_juvt34o7hx.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1307877_juvt34o7hx.woff') format('woff'),
			url('//at.alicdn.com/t/font_1307877_juvt34o7hx.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1307877_juvt34o7hx.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
	.detailone{
		width: 100%;
	}
	.nav {
		display: flex;
	}

	.nav .active {
		font-size: 17px;
		border-bottom: 1.5px solid red;
		color: red;
	}

	.nav div {
		flex: 1;
		text-align: center;
		height: 35px;
		line-height: 35px;
	}

.bottom {
		position: fixed;
		display: flex;
		bottom: 0;
		width: 100%;
		font-size: 14px;
		z-index: 1000;
		border-top: solid 1px #e4ecf3;
		background-color: #fff;
	}
	.bottom .wone{
		width: 30%;
		height: 45px;
		line-height: 45px;
		text-align: center;
		color: #eb6100;
		font-size: 20px;
	}
	.bottom .wtwo{
		width: 20%;
		height: 45px;
		text-align: center;
		border: solid 1px #e4ecf3;
		color: #666;
	}
	.bottom .wtwo p{
		margin-top: 0px;
	}
		.bottom .wtwo span{
			display: inline-block;
		margin-top: 6px;
	}
	.bottom .wthree{
		width: 20%;
		height: 45px;
		text-align: center;
		color: #666;
	}
	.bottom .wthree p{
		margin-top: 0px;
	}
		.bottom .wthree span{
			display: inline-block;
		margin-top: 6px;
	}
	.bottom .wfour{
		width: 30%;
		height: 45px;
		line-height: 45px;
		text-align: center;
		background: #eb6100;
		color:white;
	}
</style>
