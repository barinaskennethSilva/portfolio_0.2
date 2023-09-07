<template>
  <Header_pages/>
      <router-view/>
</template>

<script>
import Header_pages from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header_pages
}
}
</script>

<style lang='scss'>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
