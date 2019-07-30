<template>
	<div class="homepagesearch">
		<div class="banner">
			<swiper :options="swiperOption">
				　 <swiper-slide class="img" v-for="(item,index) in homepage.banner" :key="index">
					<img :src="item.imgurl" @click="page(item,index)" />
				</swiper-slide>

				<!-- <swiper-slide class="img" v-for="(item,index) in homepage.banner" :key="index">
						<img :src="item[1].imgurl" />
			   </swiper-slide> -->
				　　<div class="swiper-pagination" slot="pagination"></div>
				　　
				<!-- <div class="swiper-button-prev" slot="button-prev"></div>
		　　<div class="swiper-button-next" slot="button-next"></div> -->
			</swiper>
		</div>
		<div class="section">
			<div class="sec">
				<figure v-for="(item,index) in homepage.section" :key="index">
					<img :src="`http://127.0.0.1:81/${item.img}`" @click="section(item,index)" />
					<figcaption>{{item.msg}}</figcaption>
				</figure>
			</div>
		</div>
		<div class="home-public">
			<div class="nav">
				<div class="hr"></div>
				<div class="title">{{homepage.publicti}}</div>
			</div>
			<div class="public-content">
				<div class="content" v-for="(item,index) in homepage.publiccontent" :key="index">
					<div class="cover">
						<img :src="`http://127.0.0.1:81/${item.img}`" @click="detail(item,index)" />
					</div>
					<div class="cover-name">
						{{item.name}}
					</div>
					<div class="cover-price">
						{{item.price}}
					</div>
					<div class="type">
						{{item.type}}
					</div>
				</div>
			</div>
		</div>
		<div class="foot">
			<div class="one">
				<a href="http://localhost:8080/homepagesearch.vue#/login" >
					<span v-if="!ysq">{{record.login}}</span>
				</a>
				<span v-if="ysq" class="www" @click="order">{{username}} </span>
				<a href="http://localhost:8080/homepagesearch.vue#/login" >
					<span v-if="!ysq">{{record.register}}</span>
				</a>
				<span v-if="ysq" class="www" @click="tuichu">退出 |</span>
				
				<a href="">
					<span>{{record.homepage}}</span>
				</a>
				<span>{{record.download}}</span>
				<span>{{record.phone}}</span>
			</div>
			<div class="two">
				<span>{{record.sign}}</span>
			</div>
			<div class="three">
				<span>{{record.signone}}</span>
			</div>
			<div class="four">
				<span>{{record.signtwo}}</span>
			</div>
			<div class="five">
				<span>{{record.copy}}</span>
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
		name: 'homepagesearch',
		data() {
			return {
				record: {},
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true // 允许点击小圆点跳转
					},
					autoplay: {
						delay: 3000,
						disableOnInteraction: false // 手动切换之后继续自动轮播
					},
					loop: true,
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev'
					}
				},
				isshow: false,
				username:sessionStorage.wzp,
				ysq:false
			}
		},
		created() {
			this.getDataTwo()
			if(sessionStorage.wzj){
				this.ysq=!this.ysq
			}
		},
		methods: {
			getDataTwo() {
				let url = "http://localhost:81/getDataTwo"
				axios.get(url).then(res => {
					console.log("res", res)
					this.record = res.data.foot

				}).catch(err => {
					console.log("err:", err)
				})
			},
			page(data, i) {
				if (i == 0 || i == 1) {
					this.$router.push({
						name: 'pageOne',
						query: {
							data: JSON.stringify(data)
						}
					})
				}else if (i == 2 || i == 3 || i == 4 || i == 5) {
					this.$router.push({
						name: 'course',
						params:data
					})
				}
			},
			detail(dataone, i) {
				this.$router.push({
					name: 'coursetwo',
					params:dataone

				})
			},
			section(datatwo, i) {
				this.$router.push({
					name: 'section',
					query: {
						data: JSON.stringify(datatwo)
					}
				})
			},
			// 点击退出跳转到登录页面
			tuichu(){
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
						// 清空sessionStorage
						sessionStorage.clear()
						// 跳转到首页
						this.$router.push({
							name: "login"
						})
					}
				}, 1000);
			},
			// 点击用户名跳转到我的订单页面
			order(){
				this.$router.push({
					name: "myorder"
				})
			}
			
// 			ish() {
// 				this.$store.commit("isho", this.isshow)
// 			}
		},
		props: ["homepage"]


	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.homepagesearch {
		background-color: #F2F2F2;
	}

	.banner {
		background-color: white;
	}

	.banner .img img {
		width: 100%;
	}

	.section {
		background-color: white;
	}

	.section .sec {
		width: 100%;
		height: 100px;
		display: flex;
	}

	.section .sec figure {
		width: 33.333%;
		text-align: center;
		font-size: 13px;
		margin-left: 30px;
	}

	.section .sec figure img {
		width: 60px;
		height: 61px;
	}

	.home-public {
		margin-top: 10px;
		background-color: white;
		padding-bottom: 10px;
	}

	.home-public .nav {
		display: flex;
		padding-top: 10px;
		margin-left: 10px;
	}

	.home-public .nav .hr {
		width: 2.5px;
		height: 24px;

		background-color: #EB6100;
	}

	.home-public .title {
		font-size: 14px;
		margin-top: 4px;
		margin-left: 10px;
	}

	.home-public .public-content {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.home-public .public-content .content {
		position: relative;
		width: 46%;
		margin-left: 10px;
		margin-top: 10px;
	}

	.home-public .public-content .content .cover img {
		width: 100%;
	}

	.home-public .public-content .content .cover-name {
		font-size: 14px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
		margin-top: 10px;
	}

	.home-public .public-content .content .cover-price {
		float: right;
		margin-top: 10px;
		color: red;
		font-size: 14px;
	}

	.home-public .public-content .content .type {
		position: absolute;
		bottom: 55px;
		left: 0;
		font-size: 13px;
		border: solid 1px;
		width: 40px;
		height: 18px;
		color: #DDDDDE;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 1000;
	}

	.foot {
		/* border: solid 1px; */
		width: 100%;
		padding: 20px 0;
		text-align: center;
		color: #6D6D6E;
		font-size: 14px;
	}

	.foot a {
		text-decoration: none;
		color: #6D6D6E;
	}

	.foot .one {
		font-size: 16px;
	}

	.foot .two {
		margin-top: 10px
	}

	.foot .five {
		color: #CCCFD7;
		font-size: 12px;
		margin-top: 10px
	}
	.foot .one .www{
		color: red;
	}
</style>
