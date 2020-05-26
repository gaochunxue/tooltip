<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="stylus">
#app {
  background-color: #fff
  color: #333
  height: 100%
  width: 100%
}
</style>
