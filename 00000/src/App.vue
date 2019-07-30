<template>
  <div id="app">
		<myheader></myheader>
		<div class="box">
			<router-view :homepage="homepage"></router-view>
		</div>
		
  </div>
</template>

<script>
import axios from 'axios'
import myheader from '@/components/myheader/myheader'
export default {
  name: 'App',
	data() {
		return {
			homepage:{}
		}
	},
	created() {
		this.getData()
	},
	methods:{
		getData(){
			let url = "http://localhost:81/getData"
			axios.get(url).then(res=>{
				this.homepage=res.data.homepage
				
			}).catch(err=>{
				console.log("err:",err)
			})
		}
	},
	components:{
		myheader
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
