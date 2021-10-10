<template>
    <div id="map">

    </div>
</template>

<script>
import L from 'leaflet'
export default {
    name: "map",
    data(){
        return{
            map: {},
            markers:[]
        }
    },
    mounted(){
        this.map = L.map('map',{
            center: [25.03,121.55],
            zoom: 14
        })
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a target="_blank  href="https://www.openstreetmap.org">OpenStreetMapcontributors</a> ',maxZoom: 18,
}).addTo(this.map);
        
    },
    computed:{
        currDistrictInfo(){
            return this.$store.getters.currDistrictInfo
        },
        filteredStores(){
            return this.$store.getters.filterStore
        }
    },
    watch:{
        currDistrictInfo(dist){
            this.map.panTo(new L.LatLng(dist.latitude,dist.longitude))
            
        
           
        },
        filteredStores(stores){
            this.clearMakers()
           
            stores.forEach((items)=>{
                return this.addMarker(items)
            })
        }
    },
    methods:{
        addMarker(item){
            const ICON = {
                // iconurl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png",
                iconurl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
                // shadowurl:"https://leafletjs.com/examples/custom-icons/leaf-green.png",
                shadowurl:"https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
                iconSize:     [38, 95], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            }
            const marker = L.marker([item.longitude,item.latitude],ICON)
            .addTo(this.map)
            .bindPopup(`<h2 class="popup-name">${item.name}</h2>`)

            marker.markerId = item.id
            marker.markerIng = item.longitude
            marker.markerlat = item.latitude

            this.markers.push(marker)


        },
        clearMakers(){
            this.map.eachLayer((layer)=>{
                if (layer instanceof L.Marker){
                    this.map.removeLayer(layer)
                }
            })
            this.markers.length = 0
        },
        triggerPopup(markerId){
            const marker = this.markers.find((d)=> d.markerId === markerId)

            this.map.flyTo(new L.LatLng(marker.longitude,marker.latitude),22)
            marker.openPopup()
        }
    }

}
</script>

<style>
#map{
    width: 100% ;
    height: 100%;
    border: 3px solid #fff;
    flex: 3;
    overflow: hidden;
    z-index: 1;
}
</style>

