<template>
 <div class="map-box">
  <div>
   <h2>You would like to join the movement?</h2>
   <p>
    Europe is currently discussing a regulation change in favor for local energy
    markets. Let us know by adding a vote for local energy markets to your
    country on the map.
   </p>
   <input type="text" v-model="chosenCountry" />
  </div>
  <EuropeMap @setCountry="setChosenCountry" />
 </div>
</template>

<script>
import EuropeMap from "./EuropeMap.vue";

export default {
 data() {
  return {
   chosenCountry: null,
  };
 },
 methods: {
  setChosenCountry(country) {
   this.chosenCountry = country;
  },
 },
 components: { EuropeMap },
};
</script>

<style scoped>
.map-box {
 padding: 50px 0 50px 20px;
 display: flex;
 color: #fcfcfc;
}
input {
 background: none;
 color: #fcfcfc;
 border: 1px solid #fcfcfc;
 outline: none;
 border-radius: 3px;
}
</style>