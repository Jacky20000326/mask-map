<template>
    <div class="list-info">
        <div class="lists" v-for="s in filterStore" :key="s.id" >
          <h2> <b> {{s.name}}</b></h2>  <br>
            {{s.phone}}
            <i class="far fa-eye" @click="openmodel(s.id)"></i>
            
            <p>{{s.address}}
            </p>
            <mask-info>
                <div class="adult">
                    <div class="quantity" >
                        成人：{{s.mask_adult}}
                    </div>
                </div>
                <div class="child">
                    <div class="quantity">
                        兒童：{{s.mask_child}}
                    </div>
                </div>
            </mask-info>
            <hr>
        </div>
        
        
    </div>
    
    
</template>

<script>
import L from 'leaflet'
import { mapGetters,mapState } from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapGetters(['filterStore']),
        ...mapState(['keyword']),
        showmodel:{
            get(){
            return this.$store.state.showmodel
            },
            set(value){
                this.$store.commit('setshowmodel',value)
            }
        },
        infoBoxid:{
            get(){
                return this.$store.state.infoBoxid
            },
            set(value){
                this.$store.commit('setinfoBoxid',value)
            }
        }
        

    },
    methods:{
        lightlightKeyword(val){
            return  val.replace(new RegExp(this.keyword,'g'),`<span class="hightlight">${
                this.keyword
            }</span>`)
        },
        openmodel(sid){
            this.showmodel = true
            this.infoBoxid = sid
            console.log(this.$store.state.store)
        }
    }
    

}
</script>

<style scoped>
.list-info{
    background-color: #F2CC8F;
    height: 70%;
    padding: 30px;
    overflow: scroll;

}
.lists{
    margin-bottom: 30px;
    position: relative;
}
h2{
    color: #FFFFFF;
    font-size: 24px;
}
p{
    color: #3D405B;
    font-size: 13px;
    margin-top: 10px;
}
mask-info{
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.adult,.child{
    background-color: #F4F1DE;
    width: 100px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.quantity{
    color: #E07A5F;
}
.far.fa-eye{
    position: absolute;
    top: 8px;
    right: 15px;
    font-size: 20px;

}
.hightlight{
    color: red;
}
/* 更換滾輪顏色 */

</style>