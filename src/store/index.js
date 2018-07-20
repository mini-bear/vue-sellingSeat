import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);


const store = new Vuex.Store({

	state:{

		title:"卖座电影", //定义共享状态

		bannerList:[],

		nowplayingList:[],

		comingsoonList:[]
	},
	actions:{

		getBannerList(store){

			axios.get('/v4/api/billboard/home?__t=1530428155496').then(res=>{
				// console.log(res.data.data.billboards);
				
				store.commit("getBannerListMutations",res.data.data.billboards)

			})

		},
		getnowplayingList(store){

			axios.get('/v4/api/film/now-playing?page=1&count=7').then(res=>{

				// console.log(res.data.data.films);
				store.commit("getnowplayingListMutations",res.data.data.films)

			})

		},
		getcomingsoonList(store){

			axios.get('/v4/api/film/coming-soon?page=1&count=7').then(res=>{

				// console.log(res.data.data.films);
				store.commit("getcomingsoonListMutations",res.data.data.films)

			})

		}		

	},
	mutations:{

		getBannerListMutations(state,payload){

			state.bannerList = payload;

		},
		getnowplayingListMutations(state,payload){

			state.nowplayingList = payload;

		},
		getcomingsoonListMutations(state,payload){

			state.comingsoonList = payload;

		}
	}

})


export default store;