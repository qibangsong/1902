<template>
  <div class="search" >
		<div class="sear">
			<div class="logo">
				<a href="homepagesearch.vue">
					<img :src="`http://127.0.0.1:81/${homepage.logoimg}`"   />
				</a>
			</div>
			<div class="ipt">
				<span class="searchname">{{homepage.searchname1}}</span>
				<span class="iconfont">&#xe622;</span>
			</div>
			<div class="menu">
				<a href="homepagesearch.vue">
					<p class="caidan">{{homepage.qx}}</p>
				</a>	
			</div>
		</div>
    <div class="hot">
			<p>{{homepage.hot}}</p>
			<div class="content">
				<div class="cot" v-for="(item,index) in homepage.curriculum" :key="index">
					{{item.name}}
				</div>
			</div>
		</div>
		<div class="dear">
			<p>{{homepage.dear}}</p>
		</div>
		
		
		
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
			
    }
  },
  methods:{
		
  },
  props:["homepage"]
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
		font-family: 'iconfont';  /* project id 1307877 */
		src: url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.eot');
		src: url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.eot?#iefix') format('embedded-opentype'),
		url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.woff') format('woff'),
		url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1307877_x7uzyz0qqo.svg#iconfont') format('svg');
  }
	.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
	}
	.search{
		width: 100%;
		height: 667px;
		overflow: hidden;
		background-color: #EDF0F0;
	}
	.sear{
		width: 100%;
		display: flex;
		width: 100%;
		height: 55px;
		background-color: white;
	}
	.sear .logo{
		width: 31px;
		height: 31px;
		text-align: center;
		margin-left: 8px;
		margin-top: 12px;
	}
	.sear .logo img{
		width: 100%;
		vertical-align: middle;
	}
	.sear .ipt{
		border-radius: 3px;
		width: 261px;
		height: 30px;
		font-size: 14px;
		font-weight: 400;
	  line-height: 30px;
	  color: #897589;
		background-color:#F2F2F2;
		margin-top: 14px;
		margin-left: 10px;
	}
	.sear .ipt .searchname{
		margin-left: 16px;
	}
	.sear .ipt .iconfont{
		font-size: 20px;
		vertical-align: middle;
		margin-left: 100px;
	}
	.sear .menu{
		position: absolute;
		height: 30px;
		line-height: 30px;
		right: 10px;
		text-align: center;
	}
	.sear .menu a{
		text-decoration: none;
	}
	.hot{
		margin-top: 20px;
		margin-left: 10px;
	}
	.hot p{
		color: #999;
		font-size: 15px;
	}
	.hot .content{
		width: 100%;
		height: 90px;
		margin-top: -12px;
	}
	.hot .content .cot{
		float: left;
		width:30%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		background-color: white;
		font-size: 15px;
		margin-top: 10px;
	}
	.hot .content .cot:nth-of-type(2){
		margin-left: 10px;
	}
	.hot .content .cot:nth-of-type(3){
		margin-left: 10px;
	}
	.hot .content .cot:nth-of-type(5){
		margin-left: 10px;
	}
	.hot .content .cot:nth-of-type(6){
		margin-left: 10px;
	}
	.dear{
		margin-top: 20px;
		margin-left: 10px;
	}
	.dear p{
		color: #999;
		font-size: 15px;
	}
</style>
