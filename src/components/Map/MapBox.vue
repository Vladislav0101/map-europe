<template>
 <transition-group tag="div" name="map" class="map-box">
  <div v-if="chosenCountry" :key="1">
   <h2>You would like to join the movement?</h2>
   <p>
    Europe is currently discussing a regulation change in favor for local energy
    markets. Let us know by adding a vote for local energy markets to your
    country on the map.
   </p>
   <form action="POST">
    <input type="text" v-model="chosenCountry" disabled />
    <button>Vote</button>
   </form>
  </div>
  <EuropeMap @setCountry="setChosenCountry" :key="2" />
 </transition-group>
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
 max-width: 1280px;
 margin: auto;
 padding: 50px 0 50px 20px;
 display: flex;
 color: #fcfcfc;
 transition: all 2s linear;
 justify-content: center;
}
.map-box p {
 max-width: 420px;
}
.map-enter-active,
.map-leave-active {
 transition: all 1s;
}
.map-enter,
.map-leave-to {
 opacity: 0;
 transform: translateY(30px);
}
.map-move {
 transition: all 0.2s linear;
}
form {
 display: flex;
 flex-direction: column;
 row-gap: 1rem;
}
button,
input {
 border: 1px solid #4e595f;
 background: none;
 color: #fcfcfc;
 outline: none;
 transition: all 0.2s linear;
}
input {
 padding-left: 1rem;
 height: 2rem;
}
input:hover {
 border: 1px solid #2bb3a0;
}
button {
 height: 2.5rem;
}
button:hover {
 cursor: pointer;
 background: #2bb3a0;
}
</style>