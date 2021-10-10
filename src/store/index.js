import { createStore } from 'vuex'

export default createStore({
  state: {
    currCity: "臺北市",
    currDistrict: "士林區",
    local:[],
    // 存放縣市/行政區api
    store:[],
     // 存放藥局api
    keyword: '',
    showmodel: false,
    infoBoxid: null
  },
  getters:{
    cityList(state){
      return state.local.map(item => item) 
    },
    DistrictList(state){

    return state.local.find(item => 
        item.name === state.currCity)?.districts || []
      
    },
    filterStore(state){
      const { store } = state
      return state.keyword ? store.filter((item)=>{
        return item.name.includes(state.keyword)
      }) :                                                                                                                                                                                                                                                                                                                                     
      store.filter((item)=> {
        return item.county === state.currCity && item.town === state.currDistrict
      })
    },
    currDistrictInfo(state,getters){
    return getters.DistrictList.find((item)=>{
      return  item.name === state.currDistrict || {}
      })
    }
  },
  mutations: {
    setCurrCity(state,payload){
      state.currCity = payload
    },
    setCurrDistrict(state,payload){
      state.currDistrict = payload
    },
    setLocal(state,payload){
      state.local = payload
    },
    setStore(state,payload){
      state.store = payload
    },
    setkeyword(state,payload){
      state.keyword = payload
    },
    setshowmodel(state,payload){
      state.showmodel = payload
    },
    setinfoBoxid(state,payload){
      state.infoBoxid = payload
    }
  },
  actions: {
    // 取的縣市api
    getLocalData({commit}){
      axios.get('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json')
      .then((items)=>{
        let data = items.data
        
        commit('setLocal',data)
      })
      
    },
    // 取的縣市api
  async  getStoreData({commit}){
    const json =await fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then((items)=> items.json())
    const data = json.features.map((d) => ({
      ...d.properties,
      latitude: d.geometry.coordinates[0],
      longitude: d.geometry.coordinates[1]
    }))
      
   commit('setStore',data)

    }
    
  },
  modules: {
    
  }
})
