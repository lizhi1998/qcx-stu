<template>
  <van-tabbar v-model="bar.active">
    <van-tabbar-item
      icon="wap-home"
      to="/student/home"
    >首页</van-tabbar-item>

    <van-tabbar-item
      icon="user-circle-o"
      to="/student/profile"
    >我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      bar: {
        active: 0,
        info: 0
      }
    }
  },

  watch: {

  },

  created() {

  },

  mounted() {

  },

  destroyed() {

  },

  methods: {

  }
}
</script>
<style>
</style>
