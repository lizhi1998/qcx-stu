<template>
  <div :style="frameSetStyle.sidebarStyle">
    <input
      type="hidden"
      :value="listenInit"
    >
    <input
      type="hidden"
      v-model="monitor_win_size"
    >
    <el-scrollbar>
      <div
        id="menu-main"
        :style="frameSetStyle.menuStyle"
        class="sidebar-content"
      >
        <el-menu
          collapse-transition
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          text-color="#ffffffff"
          background-color="#354052"
          router
        >
          <el-menu-item index="home">
            <i
              class="el-icon-s-home"
              style="color:white"
            ></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i
              class="el-icon-view"
              style="color:white"
            ></i>
            <span slot="title">巡查管理</span>
          </el-menu-item>
          <el-submenu>
            <template slot="title">
              <i
                class="el-icon-user"
                style="color:white"
              ></i>
              <span>用户管理</span>
            </template>
            <el-menu-item><i
                class="el-icon-refresh"
                style="color:white"
              ></i>更新带班表</el-menu-item>
            <el-menu-item><i
                class="el-icon-edit"
                style="color:white"
              ></i>重置管理员密码</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i
                class="el-icon-edit"
                style="color:white"
              ></i>
              <span slot="title">学生管理</span>
            </template>
            <el-menu-item><i
                class="el-icon-thumb"
                style="color:white"
              ></i>逐个操作</el-menu-item>
            <el-menu-item><i
                class="el-icon-link"
                style="color:white"
              ></i>批量操作</el-menu-item>
            <!-- <el-menu-item>添加学生</el-menu-item> -->
            <el-menu-item><i
                class="el-icon-set-up"
                style="color:white"
              ></i>无专业学生处理</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i
                class="el-icon-tickets"
                style="color:white"
              ></i>
              <span slot="title">数据管理</span>
            </template>
            <el-menu-item><i
                class="el-icon-edit-outline"
                style="color:white"
              ></i>操作日志导出</el-menu-item>
            <el-menu-item><i
                class="el-icon-document-copy"
                style="color:white"
              ></i>学生记录导出</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i
                class="el-icon-setting"
                style="color:white"
              ></i>
              <span slot="title">个人配置</span>
            </template>
            <el-menu-item><i
                class="el-icon-refresh-left"
                style="color:white"
              ></i>密码修改</el-menu-item>
            <el-menu-item><i
                class="el-icon-receiving"
                style="color:white"
              ></i>部署公告</el-menu-item>
            <el-menu-item><i
                class="el-icon-bell"
                style="color:white"
              ></i> <span slot="title">申诉消息</span></el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </el-scrollbar>
  </div>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 400px; */
  height: auto;
}
i {
  color: white;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      frameSetStyle: {},
      menus: {
        resource: {
          show: false,      //用于显示菜单
          dataReset: false, // 数据重置
          studentLog: false, // 学生记录导出
          operationLog: false // 操作日志导出
        },
        user: {
          show: false,
          charge: false // 更新帶班表
        },
        student: {
          show: false,
          add: false, // 添加学生
          free: false, // 无班级学生修改
          batch: false, // 批量修改
          single: false // 单个修改
        },
        info: {
          show: false,
          appeal: false, // 申诉处理
          apply: false // 加减分处理
        }
      }
    };
  },



  computed: {
    //监听初始化入口
    listenInit() {
      return this.$store.state.listenInit;
    },
    //监听框架样式
    monitor_win_size: function () {
      let frameSetStyleTmp = this.$store.state.frameSetStyle;
      this.frameSetStyle = frameSetStyleTmp.init();
      return this.$store.state.monitor_win_size;
    },
    //监听默认菜单
    defaultMenuActive() {
      return this.$store.state.defActiveMenu;
    },


  },
  watch: {
    listenInit: "getNowRoleMenu"
  },
  mounted() {
    this.handleSelect()
  },
  methods: {
    handleOpen(key, keyPath) {
      //  this.showMenu()
      //   console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      //   console.log(key, keyPath)
    },
    handleSelect() { console.log(this.frameSetStyle) },
  }
};
</script>