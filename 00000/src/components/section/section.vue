<template>
	<div class="section">
		<div class="wzj">
			<div class="nianji">
				{{data.nianji}}
				<span class="iconfont">&#xe600;</span>
			</div>
			<div class="style">
				{{data.style}}
			</div>
			<div class="shaixuan">
				<span class="iconfont">&#xe691;</span>
				{{data.shaixuan}}
			</div>
		</div>
		<div class="content">
			<div class="zhibo" @click="cur=0" :class="{active:cur==0}">
				{{data.typeone}}
			</div>
			<div class="shipin" @click="cur=1" :class="{active:cur==1}">
				{{data.typetwo}}
			</div>
		</div>
		<div class="show">
			<div ref="" class="">
				<div class="zb" v-show="cur==0">
					<div class="zbcontent" v-for="(item,index) in data.conone" :key="index">
						<div class="top">
							<img :src="item.img" />
							<div class="wenzi">
								<p class="one">{{item.title}}</p>
								<p class="two">{{item.time}}</p>
							</div>
						</div>
						<hr />
						<div class="bottom">
							<span class="peo">{{item.peo}}</span>
							<span class="price">{{item.price}}</span>
						</div>
					</div>
				</div>
			</div>
			<div ref="wj" class="wj">
				<div>
					<div class="sp" v-show="cur==1" v-for="(item,index) in data.contwo" :key="index">
						<div class="box">
							<div class="top">
								<img :src="item.img" />
								<div class="wenzi">
									<p class="one">{{item.title}}</p>
									<p class="two">{{item.time}}</p>
								</div>
							</div>
							<hr />
							<div class="bottom">
								<span class="peo">{{item.peo}}</span>
								<span class="price">{{item.price}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		name: 'section',
		data() {
			return {
				data: {},
				cur: 0
			}
		},
		created() {
			this.data = JSON.parse(this.$route.query.data)
		},
		methods: {

		},
		mounted() {
			let wj = this.$refs.wj
			let scroll = new BScroll(wj)

		}


	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_grf3gaw8v.eot');
		src: url('//at.alicdn.com/t/font_1307877_grf3gaw8v.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1307877_grf3gaw8v.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1307877_grf3gaw8v.woff') format('woff'),
			url('//at.alicdn.com/t/font_1307877_grf3gaw8v.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1307877_grf3gaw8v.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.active {
		color: red;
		font-size: 17px;
	}

	.wj {
		height: 522px;
		overflow: scroll;
	}


	.section {
		background-color: #F2F2F2;
		overflow: hidden;
		/* border: solid 1px; */
		height: 1930px;
	}

	.wzj {
		width: 100%;
		display: flex;
		height: 40px;
		line-height: 40px;
		background-color: white;
		margin-top: 10px;
	}

	.wzj div {
		flex: 1;
		text-align: center;
		font-size: 14px;
	}

	.content {
		width: 100%;
		margin-top: 20px;
		display: flex;
	}

	.content .zhibo {
		width: 60px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		margin-left: 20px;
	}

	.content .shipin {
		width: 60px;
		height: 20px;
		text-align: center;
		line-height: 20px;
		margin-left: 20px;
	}

	.show .zb {
		/* border: solid 1px; */
	}

	.show .zbcontent {
		width: 90%;
		font-size: 14px;
		background-color: white;
		padding: 10px 0 10px 6px;
		margin: 10px auto;

	}

	.show img {
		width: 111px;
	}

	.show .top {
		display: flex;
	}

	.show .top .wenzi {
		margin-left: 16px;
	}

	.show .top .wenzi .one {
		margin-top: 2px;
		font-size: 15px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.show .top .wenzi .two {
		color: #999999;
	}

	.show hr {
		border: solid 0.5px #DDDDDD;
	}

	.show .zbcontent .bottom .peo {
		display: inline-block;
		margin: 10px 0 6px 10px;
	}

	.show .bottom .price {
		float: right;
		margin-right: 20px;
		margin-top: 10px;
		color: red;
	}

	.show .box {
		width: 90%;
		font-size: 14px;
		background-color: white;
		padding: 10px 0 10px 6px;
		margin: 10px auto;
	}

	.show .box .bottom .price {
		margin-top: 0;
	}
</style>
