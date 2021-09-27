<template>
  <div id="app">
    <data-quality />
  </div>
</template>

<script>
import DataQuality from './components/DataQuality'
export default {
  name: 'App',
  components: {
    DataQuality
  }
}
</script>

<style lang="stylus" scoped>
@import './stylus/main'

#app
  margin  30px
  display flex
  flex-flow column
  //justify-content center
  //align-items center
</style>
