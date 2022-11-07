<template>
  <div class="wrap bg-light">
    <myHeader></myHeader>
    <router-view />
    <myFooter></myFooter>
  </div>
</template>

<script>
import myHeader from './components/modules/myHeader.vue'
import myFooter from './components/modules/myFooter.vue'

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(52, 58, 64);
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body, .wrap{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>
