<template>
	<div class="course">
		<div class="content">
			<div class="title">
				<span>{{date.title1}}</span>
			</div>
			<div class="people">
				<i class="iconfont">&#xe625;</i>
				<span>{{date.people}}</span>
			</div>
			<div class="time">
				<i class="iconfont">&#xe65d;</i>
				<span>{{date.time}}</span>
			</div>
			<div class="name">
				<img :src="date.photourl" />
				<span class="na">{{date.name}}</span>
				<span class="hz">{{date.age}}</span>
			</div>
		</div>
		<div class="nav">
			<div class="hr"></div>
			<div class="active1">{{date.active1}}</div>
		</div>
		<div class="banner">
			<img :src="date.conurl" />
		</div>
		<div class="nav">
			<div class="hr"></div>
			<div class="active1">{{date.title2}}</div>
		</div>
		<div class="zx">
			<img :src="`http://127.0.0.1:81/${date.img2}`" />
		</div>

	</div>

</template>

<script>
	export default {
		name: 'course',
		data() {
			return {
				
			}
		},

		created() {
			
		},
		methods: {

		},
		props:["date"]

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_dth284vxoze.eot');
		src: url('//at.alicdn.com/t/font_1307877_dth284vxoze.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1307877_dth284vxoze.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1307877_dth284vxoze.woff') format('woff'),
			url('//at.alicdn.com/t/font_1307877_dth284vxoze.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1307877_dth284vxoze.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.course {
		overflow: hidden;
	}

	.content {
		width: 100%;
		height: 104px;
		border-top: solid 1px #DDDDDD;
		border-bottom: solid 1px #DDDDDD;
		color: #999999;
		padding: 14px 10px;
	}

	.content .title {
		font-size: 15px;
		color: black;
	}

	.content .people {
		font-size: 14px;
		margin-top: 6px;
	}

	.content .people .iconfont {
		font-size: 20px;
	}

	.content .people span {
		vertical-align: 3px;
	}

	.content .time {
		font-size: 14px;
		margin-top: 6px;
	}

	.content .time .iconfont {
		font-size: 14px;
		margin-left: 2px;
	}

	.content .time span {
		display: inline-block;
		margin-left: 3px;
	}

	.content .name {
		margin-top: 10px;
	}

	.content .name img {
		width: 26px;
		height: 26px;
	}

	.content .name .na {
		color: black;
		vertical-align: 8px;
		margin-left: 10px;
	}

	.content .name .hz {
		display: inline-block;
		border: solid 1px #999999;
		border-radius: 6px;
		padding: 3px;
		font-size: 12px;
		vertical-align: 9px;
		margin-left: 10px;
	}

	.nav {
		display: flex;
		padding-top: 10px;
		margin-left: 10px;
	}

	.nav .hr {
		width: 2.5px;
		height: 24px;
		background-color: #1E89E0;
	}

	.nav .active1 {
		/* font-size: 15px; */
		margin-top: 4px;
		margin-left: 10px;
	}

	.banner {
		width: 100%;
		margin-top: 10px;
	}

	.banner img {
		width: 100%;
	}

	.zx {
		width: 100%;
		text-align: center;
	}

	.zx img {
		width: 100px;
		height: 30px;
	}
</style>
