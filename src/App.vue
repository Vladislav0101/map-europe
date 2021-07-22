<template>
 <div id="app">
    <router-view to="/"></router-view>
 </div>
</template>

<script>
import axios from "axios";

// import MapBox from "./components/Map/MapBox.vue";

export default {
 name: "App",

//  components: { MapBox },

 methods: {
  setLocale(locale) {
   axios.get(`http://localhost:8080/langs/${locale}.json`).then((res) => {
    this.$i18n.setLocaleMessage(locale, res.data);
    this.$i18n.locale = locale;
   });
  },
 },
};
</script>
