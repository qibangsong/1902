<template>
  <div class="evaluate" >
	  <div class="eva">
			<img :src="`http://127.0.0.1:81/${date.evalu}`" />
			<p>暂时没有相关内容噢</p>
		</div>
		
  </div>
</template>

<script>
	
	
export default {
  name: 'evaluate',
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
.eva{
	width: 100%;
	text-align: center;
	margin-top: 20px;
}
.eva img{
	width: 30%;
}
</style>
