<template>
  <div class="catalog" >
	  <ul>
			<li v-for="(item,index) in date.ml" :key="index">
				<span class="pitch">{{item.pitch}}</span>
				<span class="num">{{item.num}}</span>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'catalog',
  data () {
    return {
			
    }
  },
	created(){
		  
	},
  methods:{
		
  },
  props:["date"]
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.catalog{
	overflow: hidden;
}
ul{
	width: 100%;
	border-top: solid 1px #999999;
}
li{
	width: 90%;
	height: 42px;
	line-height: 42px;
	border-bottom: solid 1px #999999;
	list-style: none;
	color: #999999;
	font-size: 13px;
	margin-left: 20px;
}
li .pitch{
	display: inline-block;
	margin-left: 20px;
}
li .num{
	display: inline-block;
	margin-left: 36px;
}
</style>
