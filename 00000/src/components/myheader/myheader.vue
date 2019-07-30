<template>
	<div class="myheader" v-if="isshow">
		<div class="search">
			<div class="logo" @click="gohome">
				<img :src="`http://127.0.0.1:81/${homepage.logoimg}`" />
			</div>
			<div class="ipt" @click="research">
				<span class="iconfont">&#xe622;</span>
				<span class="searchname">{{homepage.searchname}}</span>
			</div>
			<!-- <van-button type="primary" > -->
			<div class="menu" @click="showPopup">
				<i class="iconfont">&#xe653;</i>
				<p class="caidan">{{homepage.menu}}</p>
			</div>
			<!-- </van-button> -->
		</div>
		<van-popup v-model="show" position="right" :round="round">
			<div class="logoto">
				<img :src="dat.logourl" v-if="!sess" />
				<img src="../../../img/1040.jpg" v-if="sess" />
				<span v-if="!sess">{{dat.logoname}}</span>
				<span v-if="sess">{{this.username}}</span>
				<span v-if="sess" @click="tuichu">退出</span>
			</div>
			<div class="hanzi" @click="fn">{{dat.homepage}}</div>
			<div class="hanzi" @click="fn1">{{dat.dingdan}}</div>
			<div class="hanzi">{{dat.study}}</div>
			<div class="hanzi">{{dat.sc}}</div>
			<div class="hanzi hhh">{{dat.xiazai}}</div>
			<div class="hanzi">{{dat.phone}}</div>
		</van-popup>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Popup
	} from 'vant'
	Vue.use(Popup)
	import axios from 'axios'
	export default {
		name: 'myheader',
		created() {
			this.getData()
			this.getDataTwo()
			this.showPopup()
			this.gohome()
			this.fn()
			if (sessionStorage.wzj) {
				this.sess = true
			}
			// this.getisshow()
			// this.getback()
		},
		data() {
			return {
				homepage: {},
				dat: {},
				isshow: true,
				show: false,
				round: true,
				change: true,
				sess: false,
				username: sessionStorage.wzp
			}
		},
		methods: {
			gohome() {
				this.$router.push({
					name: "homepagesearch"
				})
			},
			getData() {
				let url = "http://localhost:81/getData"
				axios.get(url).then(res => {
					this.homepage = res.data.homepage

				}).catch(err => {
					console.log("err:", err)
				})
			},
			getDataTwo() {
				let url = "http://localhost:81/getDataTwo"
				axios.get(url).then(res => {
					this.dat = res.data.cela

				}).catch(err => {
					console.log("err:", err)
				})
			},
			research() {
				this.$router.push({
					name: 'search'
				})
				this.isshow = false
			},
			fn() {
				this.$router.push({
					name: "homepagesearch"
				})
				this.show = false
			},
			fn1() {
				this.$router.push({
					name: "myorder"
				})
				this.show = false
				console.log("ahha")
			},
			showPopup() {
				this.show = true
			},
			tuichu() {
				this.sess = false
				this.show = false
				sessionStorage.clear()
				this.$router.push({
					name: "login"
				})
			}
			// 			getisshow() {
			// 				this.isshow=this.$store.getters.getisshow
			// 				console.log(this.$store.getters.getisshow)
			// 			},
			// 			getback() {
			// 				this.isshow=this.$store.getters.getback
			// 				console.log(this.$store.getters.getisshow)
			// 			}
		},

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@font-face {
		font-family: 'iconfont';
		/* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.eot');
		src: url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.woff') format('woff'),
			url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.homepagesearch {
		background-color: #F2F2F2;
	}

	.search {
		position: relative;
		display: flex;
		width: 100%;
		height: 55px;
		background-color: white;

	}

	.search .logo {
		width: 31px;
		height: 31px;
		text-align: center;
		margin-left: 8px;
		margin-top: 12px;
	}

	.search .logo img {
		width: 100%;
		vertical-align: middle;
	}

	.search .ipt {
		border-radius: 3px;
		width: 261px;
		height: 30px;
		font-size: 14px;
		font-weight: 400;
		line-height: 30px;
		color: #897589;
		background-color: #F2F2F2;
		margin-top: 14px;
		margin-left: 10px;
	}

	.search .ipt .iconfont {
		font-size: 20px;
		vertical-align: middle;
		margin-left: 10px;
	}

	.search .menu {
		right: 10px;
		text-align: center;
	}

	.search .menu .caidan {
		color: #666;
		font-size: 12px;
		margin-top: 34px;
		margin-left: 30px;
	}

	.search .menu .iconfont {
		position: absolute;
		top: 10px;
		right: 13px;
		font-size: 22px;
		color: #666666;
	}

	.search .pop {
		position: absolute;
		top: 0;
		right: 0;
		width: 600px;
		height: 600px;
		background: red;
	}

	.van-popup {
		width: 270px;
		height: 1000px;
		background: #f2f2f2;
		overflow: hidden;
	}

	.logoto {
		width: 270px;
		height: 100px;
		line-height: 100px;
		background-color: #eb6100;
		color: white;
	}

	.logoto img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		vertical-align: middle;
		margin-left: 30px;
	}

	.logoto span {
		display: inline-block;
		margin-left: 10px;
	}

	.hanzi {
		width: 100%;
		height: 40px;
		line-height: 40px;
		padding-left: 20px;
		color: #666;
		;
		font-size: 14px;
		border-bottom: solid 1px ghostwhite;
		background: white;
	}

	.hhh {
		margin-top: 20px;
	}
</style>
