<template>
  <div id="app">
    <lightbox></lightbox>
    <topside></topside>
    <main>
      <leftside class="left" @triggerMarkerPopup="openPopup" ref="menu"></leftside>
      <rightside class="right" ref="map"></rightside>
      
    </main>
    
    
  </div>
  
</template>

<script>
import { mapActions} from 'vuex'
import topside from '@/views/header.vue'
import leftside from '@/views/leftside.vue'
import rightside from '@/views/rightside.vue'
import lightbox from '@/views/lightbox.vue'
export default {
  name: 'App',
  components: {
    topside,leftside,rightside,lightbox
  },
  methods:{
    ...mapActions(['getLocalData','getStoreData']),
    openPopup(id){
      this.$refs.map.triggerPopup(id)
    }
  },
  mounted(){
      this.getLocalData()
      this.getStoreData()
      console.log(this.$store.state.local)
      console.log(this.$store.state.store)
  },
  
  
  
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  
}

body,html{
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
main{
  width: 100%;
  display: flex;
  height: 90%;
}


</style>
