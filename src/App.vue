<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;
  margin-right: 80px;
}

html, body {
  height: 100%;
  width: 100%;
  border: hidden;
  overflow: hidden;
}

</style>
