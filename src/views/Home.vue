<template>
  <div>
    <h1>home page</h1>
    welcome {{username}}
  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    return{
      username: JSON.parse(window.localStorage.getItem('user'))
    }
  }
}
</script>

<style scoped>

</style>