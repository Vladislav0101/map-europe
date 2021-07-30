<template>
  <div>
    <header>
      <ul>
        <router-link to="/first">First</router-link>
        <router-link to="/second">Second</router-link>
        <router-link to="/third">Third</router-link>
      </ul>
      <div>
        <router-view></router-view>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$device);
  },
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 4rem;
}
li {
  list-style: none;
}
</style>