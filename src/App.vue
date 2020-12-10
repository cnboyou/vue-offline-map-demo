<template>
  <div id="app">
    <div id="map">
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
<script>
  export default {
    name: 'App',
    data() {
      return {
        amp: null,
        status: true,
        url1: 'http://localhost/satellite/{z}/{x}/{y}.jpg',
        url2: 'http://localhost/roadmap/{z}/{x}/{y}.png'
      }
    },
    mounted() {
      this.leafletMap()
    },
    methods: {
      leafletMap() {
        this.amp = this.L.map('map', {
          center: [23.165003, 113.401411], // 地图中心
          //center: [111, 23.48915], // 地图中心
          zoom: 18, //缩放比列
          minzoom: 1,
          maxzoom: 18,

          zoomControl: false,
          doubleClickZoom: false, // 禁用双击放大
          attributionControl: false // 移除右下角leaflet标识
        })

        //var url1 = 'http://localhost/satellite/{z}/{x}/{y}.jpg';
       // var url2 = 'http://localhost/roadmap/{z}/{x}/{y}.png';

        //this.name = this.L.tileLayer(this.url2).addTo(this.amp) //火星坐标地图 高德
        this.name = this.L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.amp)// wgs84 gps 地图

        /*var myimage = this.L.icon({
          iconUrl:'assets/1.jpg', //图片url
          iconSize:[50,50],     //设置图片大小 宽度50.高度100
          iconAnchor: [23.162334, 113.397859],   //设置定位点的位置。默认为中心  例子中以左上角为定位参考。相当于relative
          popupAnchor:[23.162334, 113.397859],   //设置警示框位置 ，以iconAnchor的值进行定位。相当于absolute 例子中的警示框定位到有、右上角。
        })
        var marker = this.L.marker([23.162334, 113.397859],{icon: myimage,title:'Hello Guangzhou', draggable: true}).addTo(this.amp);*/
        //var marker = this.L.marker([23.165003, 113.401411]).addTo(this.amp); //火星坐标
        var marker = this.L.marker([23.167483065871703, 113.39588355237883]).addTo(this.amp); //wgs 84 坐标
        setTimeout(function() {
          this.amp.invalidateSize(true)
        }, 10)
      }
    }
  }
</script>
<style>
  #map {
    width: 100%;
    height: 100vh;
  }
</style>