<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeName: 'second'
    }
  },
    methods: {
    }
}
</script>

<style>
body{
  background:lightblue
}
</style>
