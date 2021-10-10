<template>
    <div class="leftside">
        <div class="now">
            <div class="day">
                <b>星期六</b>
            </div>
            <div class="date">
                <div class="right"><b>2021-7-3</b></div>
            </div>
        </div>
        <div class="filter">
            <div class="city">
                <div class="control">
                    <div class="select">
                        <select v-model="currCity">                  
                            <option v-for="city in cityList" :key="city.id" >{{city.name}}</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="region ">
                <div class="control">
                    <div class="select">
                        <select v-model="currDistrict">
                            <option v-for="district in DistrictList" :key="district.id" >{{district.name}}</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>
        
        <input class="input" type="text" placeholder="請輸入藥局" v-model="keywords">
    
    </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['cityList','DistrictList']),
        currCity:{
            get(){
                return this.$store.state.currCity 
            },
            set(value){
                this.$store.commit('setCurrCity',value)
                console.log(value)
            }
        },
        currDistrict:{
            get(){
                return this.$store.state.currDistrict
            },
            set(value){
                this.$store.commit('setCurrDistrict',value)
                console.log(value)
            }
        },
        keywords:{
            get(){
                return this.$store.state.keyword
            },
            set(value){
                this.$store.commit('setkeyword',value)
            }
        }
    }
}
</script>

<style scoped>
.leftside{
    background-color: #F4F1DE;
    padding: 20px;
    height: 30%;
}
.now{
    display: flex;
   
}
.day,.date{
    color: #E07A5F;
    font-size: 20px;
    flex: 1;
}
.right{
    text-align: right;
}

.filter{
    display: flex;
    margin-top: 20px;
    
}
.city,.region{
    width: 150px;
    flex: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    
}


input{
    margin-top: 30px;
    width: 247px;
    margin-left: 36px;
}

</style>