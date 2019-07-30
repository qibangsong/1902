import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
	state: {
		isshow:"",
		arr:[]
		
	},
	getters:{
		getArr(state){
			return state.arr
		}

	},
	mutations:{
		add(state,payload){
			var obj={
				...payload,
				id:new Date().getTime()
			}
			// console.log("kkkkk",typeof state.arr)
			if(state.arr.length==0){
				state.arr.push(obj)
			}else{
				state.arr.find(k=>{
					console.log("kkkkk")
					if(k.name1==obj.name1){
						console.log("hahah")
					}else{
						state.arr.push(obj)
					}
				})
			}
			
			
		},
		delone(state,payload){
			state.arr.splice(payload.i,1)
		}
	},
	actions:{
		add({commit},payload){
		    commit("add",payload)
		},
		delone({commit},payload){
		     commit("delone",payload)
		}
	},
	plugins: [createPersistedState()]

})
