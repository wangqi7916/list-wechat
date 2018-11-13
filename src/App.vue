<template>
  <div id="app">
    <TimePicke @watchStartTime="getStartTime" @watchEndTime="getEndTime"></TimePicke>
    <List :timeS="startTime" :timeE="endTime"></List>
  </div>
</template>

<script>
import TimePicke from './components/time.vue'
import List from './components/list.vue'
export default {
  name: 'app',
  data() {
    return {
      startTime: '',
      endTime: ''
    }
  },
  components: {
    TimePicke,
    List
  },
  methods: {
    getStartTime (msg) {
      this.startTime = msg;
    },
    getEndTime (msg) {
      this.endTime = msg;
    }
  }
}
</script>

<style lang="less" scoped>
</style>
