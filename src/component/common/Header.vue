<template>
  <van-nav-bar
    :title="title"
    :left-arrow="isLeftArrowShow"
    @click-left="onClickLeft"
    style="background-color:#409EFF;"
  />
</template>
<script>
export default {
  data() {
    return {
      title: '亲苍霞',
      isLeftArrowShow: false
    };
  },

  methods: {
    onClickLeft: function () {
      window.history.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../asset/css/base.less");
</style>
