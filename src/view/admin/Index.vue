<template>
  <div class="app">
    <navheader></navheader>
    <elnav></elnav>
    <input
      type="hidden"
      v-model="monitor_win_size"
    />
    <appMain></appMain>
  </div>
</template>


<script>
import elnav from "../../component/admin/adminSidebar";
import appMain from "../../component/admin/adminMain";
import navheader from "../../component/admin/adminHeader";

export default {
  components: { navheader, appMain, elnav },
  data() {
    return {
      frameSetStyle: {},
      fullScreen: "",
      contentStyle: ""
    };
  },
  computed: {
    monitor_win_size: function () {
      let frameSetStyle = this.$store.state.frameSetStyle;
      this.fullScreen = frameSetStyle.fullScreen;
      if (this.fullScreen === true) {
        this.contentStyle = `margin-left:0px !important`;
      } else {
        this.contentStyle = `margin-left:220px !important`;
      }
      return this.$store.state.monitor_win_size;
    }
  },
  created() {

  },
  methods: {

  }
};
</script>
<style scoped>
.el-main {
  margin-left: 220px;
  position: relative;
  overflow: scroll;
  top: 65px;
  padding: 0;
  font: 14px Helvetica Neue, Helvetica, PingFang SC, Tahoma, Arial, sans-serif;
  background-color: #fff;
}
/**滚轮样式定义**/
*::-webkit-scrollbar {
  width: 8px;
  height: 6px;
  background-color: #f6f6f6;
  display: none;
}

/*滚动条的轨道*/

*::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(200, 200, 200, 0.5);
  background-color: #f6f6f6;
  display: none;
}

/*滚动条的滑块按钮*/

*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #727272;
  box-shadow: inset 0 0 3px #f6f6f6;
  display: none;
}

/*滚动条的上下两端的按钮*/

*::-webkit-scrollbar-button {
  background-color: #f6f6f6;
  display: none;
}
</style>
