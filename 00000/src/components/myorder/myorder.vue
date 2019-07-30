<template>
	<div class="myorder">
		<p class="ppp">我的订单</p>
		<div v-if="getArr.length!==0">
			<div class="content" v-for="(item,index) in getArr" :key="index">
				<div class="ren">
					<img :src="item.photourl" />
				</div>
				<div class="jieshao">
					<p>{{item.name}}</p>
					<p>{{item.name1}}</p>
					<p class="color">{{item.price}}</p>
				</div>
				<div class="del">
					<span @click="del(index)">取消订单</span>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapGetters
	} from "vuex";
	export default {
		name: 'HelloWorld',
		data() {
			return {
				data: {}
			}
		},
		created() {
			this.data = this.$route.params
		},
		computed: {
			//在计算属性里用mapGetters拿vuex里的getArr数据
			...mapGetters(["getArr"])
			// ...mapGetters(["getSame"])
		},
		methods:{
			del(i){
				this.$store.commit("delone",{i})
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.myorder .ppp {
		width: 100%;
		text-align: center;
		font-size: 20px;
	}

	.myorder .content {
		display: flex;
		padding: 10px 0 0 14px;
		border-top: dashed 1px aqua;
		border-bottom: dashed 1px aqua;
		margin-bottom: 10px;
	}

	.myorder .content .ren img {
		width: 60px;
		height: 60px;
		margin-top: 6px;
	}

	.myorder .content .jieshao {
		width: 200px;
		line-height: 0.5;
		margin-left: 20px;
	}

	.myorder .content .jieshao p {
		font-size: 14px;
	}

	.myorder .content .jieshao .color {
		color: red;
	}

	.myorder .content .del {
		width: 62px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		border: solid 1px;
		font-size: 12px;
		background: #eb6100;
		color: white;
		border-radius: 6px;
		margin-top: 36px;

	}
</style>
