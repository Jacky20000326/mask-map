<template>
    <div class="model-body">
        <b><h1 class="store-name">{{currstore?.name}}</h1></b>
        <hr>
        <table>
            <thead>
                <th></th>
                <th>一</th>
                <th>二</th>
                <th>三</th>
                <th>四</th>
                <th>五</th>
                <th>六</th>
                <th>日</th>
            </thead>
            <tbody>
                <tr>
                    <th>早上</th>
                    
                    <td v-for="(s,index) in servicePeriod[0]" :key="index">{{s}}</td>
                    
                    
                </tr>
                <tr>
                    <th>中午</th>
                    <td v-for="(s,index) in servicePeriod[1]" :key="index">{{s}}</td>
                    
                </tr>
                <tr>
                    <th>晚上</th>
                    <td v-for="(s,index) in servicePeriod[2]" :key="index">{{s}}</td>
                    
                </tr>
            </tbody>
        </table>
        <h2 class="title">地址：{{currstore?.address}}</h2>
        <h2 class="title">電話：{{currstore?.phone}}</h2>
        
        
    </div>
</template>

<script>
export default {
    computed:{
        infoBoxid:{
            get(){
                return this.$store.state.infoBoxid
            },
            set(value){
                this.$store.commit('setinfoBoxid',value)
            }
        },
        currstore(){
            return this.$store.state.store.filter((d)=>
                d.id === this.infoBoxid
            )[0]
        },
        servicePeriod(){
            let servicePeriod = this?.currstore?.['service_periods'] || ''
            servicePeriod = servicePeriod.replace(/N/g,'O').replace(/Y/g,'X')

            return servicePeriod ? 
            [servicePeriod.slice(0,7).split(''),
            servicePeriod.slice(7,14).split(''),
            servicePeriod.slice(14,21).split('')] : servicePeriod
        }
    }
}
</script>

<style scoped>
*{
    margin: 0px;
}
.model-body{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
    
    
}
table{
    width: 100%;
    height: 50%;
    background-color: #fff;
    margin-top: 40px;
    margin-bottom: 10px;
}

h1{
    font-size: 30px ;
    color: #E07A5F;
    margin-bottom: 20px;
    
}
h2{
    font-size: 30px ;
    color: #E07A5F;
    margin-top: 20px;
}

th{
    font-size: 20px;
    background-color: #fff;
    color: #E07A5F;
    margin-top: 10px;
   
}
.title{
    font-size: 20px ;
    color: #E07A5F;
    margin-top: 5px;
}
td{
    font-size: 20px;
    color: rgb(138, 138, 138);
   
}
service_periods{
    margin: 20px;
}
</style>