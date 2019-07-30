<template>
  <div class="pageTwo" >
	  <div class="nav">
	  	<router-link to="/pageTwo/course" tag="div" exact>{{date.active1}}</router-link>
	  	<router-link to="/pageTwo/catalog" tag="div">{{date.active2}}</router-link>
	  	<router-link to="/pageTwo/evaluate" tag="div">{{date.active3}}</router-link>
	  </div>
	  <div class="view">
	  	<router-view :date="date"></router-view>
		</div>
  </div>
</template>

<script>
export default {
  name: 'pageTwo',
  data () {
    return {
			date:{}	
    }
  },
	
	created(){
		  this.date = this.$route.params
	},
  methods:{
		
  },
  
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
	display: flex;
}
.nav .active{
	font-size: 17px;
	border-bottom: 1.5px solid red;
  color: red;
 }
 .nav div{
	flex: 1;
  text-align: center;
  height: 35px;
  line-height: 35px;
}
</style>
