<template>
 <div id="app" @setLocale='setLocale'>
    <router-view to="/"></router-view>
 </div>
</template>

<script>
import axios from "axios";

export default {
 name: "App",

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
