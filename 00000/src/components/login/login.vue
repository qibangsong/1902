<template>
	<div class="login">
		<div class="top" @click="backhome">
			<span class="iconfont">&#xe60b;</span>
			<span class="wz">{{record.title}}</span>
		</div>
		<div class="content">
			<div class="dz">
				<span @click="cur=0" :class="{active:cur==0}">{{record.dl}}</span>
				<span @click="cur=1" :class="{active:cur==1}">{{record.zc}}</span>
			</div>
			<div class="dl" v-show="cur==0">
				<el-input :placeholder="record.hm" v-model="pho"></el-input>
				<el-input :placeholder="record.psw" v-model="pass"></el-input>
				<div class="hh" @click="login">{{record.dl}}</div>
			</div>
			<div class="zc" v-show="cur==1">
				<el-input v-model="username" :placeholder="record.name"></el-input>
				<el-input v-model="phone" :placeholder="record.tx" @blur="phone1"></el-input>
				<el-input v-model="random" :placeholder="record.yzm" class="wj"></el-input>
				<div class="sjimg" @click="such">
					<img :src="'https://api.it120.cc/small4/verification/pic/get?key='+ss" alt="">
				</div>
				<el-input v-model="message" :placeholder="record.sjyz" class="wj"></el-input>
				<div class="fs" @click="duan">{{record.fs}}</div>
				<el-input v-model="password" :placeholder="record.yq" @blur="psw"></el-input>
				<div class="hh" @click="other">{{record.other}}</div>

			</div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'vant';
	Vue.use(Toast);
	import Vue from 'vue'
	import axios from 'axios'
	export default {
		name: 'login',
		data() {
			return {
				record: {},
				pho: "",
				pass: "",
				username: "",
				phone: "",
				random: "",
				message: "",
				password: "",
				ss: parseInt(Math.random() * 1000),
				cur: "0",
				isshow: true
			}
		},
		created() {
			this.getDataTwo()
		},
		methods: {
			getDataTwo() {
				let url = "http://localhost:81/getDataTwo"
				axios.get(url).then(res => {
					this.record = res.data.denglu
				}).catch(err => {
					console.log("err:", err)
				})
			},
			backhome() {
				this.$router.push({
					name: "homepagesearch"
				})
			},
			// 下一步
			other() {
				if (this.username == "" || this.phone == "" || this.password == "") {
					Toast("必填信息不能为空")
				} else {
					axios.post("https://api.it120.cc/small4/user/m/register?mobile=" + this.phone +"&pwd=" + this.password + "&code=" +
						this.message).then((data) => {
						console.log(data)
						if (data.data.msg == "success") {
							Toast("恭喜您注册成功,可以登录喽!")
						}
					}).catch((err) => {
						console.log(err)
					})
				}
			},
			// 获取随机验证图片
			such() {
				var str = parseInt(Math.random() * 10000)
				this.ss = str
			},
			// 短信验证码
			duan() {
				axios.post("https://api.it120.cc/small4/verification/sms/get?mobile=" + this.phone + "&picCode=" + this.random +
					"&key=" + this.ss).then((data) => {
					console.log(data)
				}).catch((err) => {
					console.log(err)
				})
			},
			// 密码格式要求
			psw() {
				var pas = /[A-Z0-9]{6,20}/
				if (!(pas.test(this.password))) {
					Toast("密码格式错误")
				} else {
					Toast("有效密码")
				}
			},
			// 手机号格式要求
			phone1() {
				var text = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
				if (!(text.test(this.phone))) {
					Toast("手机号格式错误")
				} else {
					Toast("有效手机号")
				}
			},
			login() {
				if (this.pho == "" || this.pass == "") {
					Toast("登陆失败")
				} else {
					axios.post("https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey&mobile=" + this.pho + "&pwd=" +
						this.pass).then((data) => {
						console.log(data)
						if (data.data.msg == "success") {
							sessionStorage.wzj=data.data.data.token;
							sessionStorage.wzp=data.data.data.uid;
							const toast = Toast.loading({
								duration: 0, // 持续展示 toast
								forbidClick: true, // 禁用背景点击
								loadingType: 'spinner',
								message: '倒计时 3 秒'
							});
							let second = 3;
							const timer = setInterval(() => {
								second--;
								if (second) {
									toast.message = `倒计时 ${second} 秒`;
								} else {
									clearInterval(timer);
									Toast.clear();
									// 跳转到首页
									this.$router.push({
										name: "homepagesearch"
									})
								}
							}, 1000);
						}
					}).catch((err) => {
						console.log(err)
					})
				}
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@font-face {
		font-family: 'iconfont';
		/* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.eot');
		src: url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.woff') format('woff'),
			url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_1307877_9gj6w4v9h2.svg#iconfont') format('svg');
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}

	.login {
		overflow: hidden;
	}

	.top {
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		color: #666666;
		padding-left: 30px;
		box-shadow: 0 0 10px 1px rgba(7, 17, 27, .1);
	}

	.top .wz {
		display: inline-block;
		vertical-align: 2px;
		margin-left: 6px;
	}

	.content {
		width: 100%;
		margin-top: 55px;
	}

	.content .dz {
		display: flex;
		width: 50%;
		margin: 0 auto;
	}

	.content .dz span {
		display: inline-block;
		margin: 0 auto;
	}

	.content .el-input__inner {
		width: 286px;
		height: 40px;
		margin-top: 20px;
		margin-left: 46px;
		font-size: 12px;
		padding: 0 20px;
		box-sizing: border-box;
	}

	.content .hh {
		background-color: #eb6100;
		color: white;
		width: 286px;
		height: 40px;
		line-height: 40px;
		margin-top: 20px;
		margin-left: 46px;
		text-align: center;
		padding: 0 20px;
		box-sizing: border-box;
		border-radius: 6px;
	}

	.content .active {
		color: red;
		font-size: 20px;
		vertical-align: 3px;
	}

	.content .zc {
		position: relative;
	}

	.content .zc .wj input {
		width: 171px;
	}

	.content .zc .fs {
		top: 200px;
		right: 44px;
		width: 100px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		position: absolute;
		background-color: #eb6100;
		border-radius: 6px;
		color: white;
	}

	.content .zc .sjimg {
		top: 138px;
		right: 44px;
		width: 100px;
		height: 40px;
		position: absolute;
	}

	.content .zc .sjimg img {
		width: 100px;
		height: 40px;
	}
</style>
