<template>
    <div class="left">
        <data-filter></data-filter>
        <list-info></list-info>
    </div>
    
</template>

<script>
import dataFilter from "@/components/filter.vue"
import listInfo from "@/components/listInfo.vue"
export default {
    components:{
        dataFilter,
        listInfo
        
    }
    
}
</script>

<style scoped>
.left{
    flex: 1;
    box-shadow: 7px 0px 17px 0px #d8caca ;
}
</style>