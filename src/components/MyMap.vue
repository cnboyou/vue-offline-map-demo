<template>
    <div id="map" class="map">
    </div>
</template>

<script>
  import "ol/ol.css";
  import { Map, View } from "ol";
  import TileLayer from "ol/layer/Tile"
  import XYZ from 'ol/source/XYZ'
  export default {
    name: "MyMap",
    data() {
      return {
        map: null
      };
    },
    mounted(){
      console.log('ddddddd');
      var map = new Map({
        view: new View({
          center: [113.5625, 23.01915], // 中心点, 填的是经纬度
          projection: 'EPSG:4326',  // EPSG:4326格式的经纬度
          zoom: 14, // 地图默认缩放级别
          maxZoom: 15,  // 地图最大缩放级别
          minZoom: 5,  // 地图最小缩放级别
        }),
        target: 'map', // 地图容器id
      })

      var offlineMapLayer = new TileLayer({
        source: new XYZ({
          url: 'http://localhost/{z}/{x}/{y}.png',
        })
      });

      map.addLayer(offlineMapLayer);



    }
  }
</script>

<style scoped>

    #map
    {
        height: 100%;
        width: 100%;
    }

</style>