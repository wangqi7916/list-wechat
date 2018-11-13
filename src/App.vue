<template>
  <div id="app">
    <TimePicke></TimePicke>
    <List></List>
  </div>
</template>

<script>
import TimePicke from './components/time.vue'
import List from './components/list.vue'
export default {
  name: 'app',
  components: {
    TimePicke,
    List
  }
}
</script>

<style lang="less" scoped>
  #app{
    
  }
</style>
