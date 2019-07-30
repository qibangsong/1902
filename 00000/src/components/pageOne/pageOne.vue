<template>
  <div class="pageOne" >
	 <div class="topic">
		<img :src="date.imgurl" />
	 </div>
	  <div class="courser">
		  <img :src="`http://127.0.0.1:81/${date.img1}`" />
	  </div>
	  <div class="courser">
	  	  <img :src="`http://127.0.0.1:81/${date.img2}`" />
	  </div>
	  <div class="courser">
	  	  <img :src="`http://127.0.0.1:81/${date.img3}`" />
	  </div>
	  <div class="courser">
	  	  <img :src="`http://127.0.0.1:81/${date.img4}`" />
	  </div>
	  
  </div>
</template>

<script>
export default {
  name: 'pageOne',
  created(){
	  this.date=JSON.parse(this.$route.query.data)
  },
  data () {
    return {
		date:{}	
    }
  },
  methods:{
	
  },
  
	
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageOne{
	width: 100%;
	overflow: hidden;
	background-color: #F2F2F2;
}
.pageOne .topic{
	width: 100%;
}
.pageOne .topic img{
	width: 100%;
}
.pageOne .courser{
	width: 100%;
	text-align: center;
	margin-top: 6px;
}
.pageOne .courser img{
	width: 90%;
}
</style>
