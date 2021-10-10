<template>
    <transition name="model">
        <div class="model-mask" v-show="showmodel">
            <div class="model-wrapper" @click.self="close">
                <div class="model-content"> 
                    <info></info>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import info from "@/components/storeInfo.vue"
export default {
    name: 'lightbox',
    components:{
        info
    },
    computed:{
        showmodel:{
            get(){
                return this.$store.state.showmodel
            },
            set(value){
                this.$store.commit('setshowmodel',value)
            }
        },
        
    },
    methods:{
        close(){
            this.showmodel = false
        }
    }
    
}
</script>

<style scoped>
.model-mask{
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: #000;
    position: absolute;
    z-index: 100;
    opacity: 0.9;
    font-size: 100px;
    color: #F4F1DE;
    
}
.model-wrapper{
    width: 100%;
    height: 100%;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.model-content{
    width: 100%;
    height: 100%;
    background-color: #F4F1DE;
    padding: 30px;

}
.model-body{
    width: 100%;
    height: 100%;
    display: flex;
    padding: 10px;
    color: #fff;
}

</style>