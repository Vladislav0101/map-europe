<template>
 <div>
  <img :src="srcImg" alt="User" />
  <div class="FIO">
   <h3>First name: {{ firstName }}</h3>
   <h3>Second name: {{ secondName }}</h3>
   <h3 v-if="vacancy">Vacancy: {{vacancy.Vacancy}}</h3>
  </div>
  <p v-if="vacancy">{{ vacancy.Description }}</p>
 </div>
</template>

<script>
export default {
 props: ["srcImg", "firstName", "secondName", "description", "vacancy"],
};
</script>

<style scoped>
.FIO {
}
</style>