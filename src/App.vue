<template>
 <div id="app">
  <MapBox />
 </div>
</template>

<script>
// import axios from "axios";

import MapBox from "./components/Map/MapBox.vue";

export default {
 name: "App",

 components: { MapBox },

 // mounted() {
 //   axios.interceptors.request.use(
 //     (config) => {
 //       console.log("request start");
 //       return config;
 //     },
 //     () => console.log("request end"),
 //     { synchronous: true }
 //   );
 //   axios.interceptors.response.use(
 //     (response) => {
 //       console.log("response start");
 //       return response;
 //     },
 //     () => console.log("response end")
 //   );
 //   axios.get("http://localhost:1337/names").then((response) => {
 //     console.log(response);
 //     this.users = response.data;
 //   });
 // },
};
</script>

<style>
body {
 margin: 0;
 background-color: #1d2024;
}
</style>
