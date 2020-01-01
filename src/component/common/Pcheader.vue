<template>
  <div>
    <img
      src="../../../public/img/logo-pc.png"
      class="logo-pc"
    >
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      id="chang"
      mode="horizontal"
      @select="handleSelect"
      background-color="#1E90FF"
      text-color="#ffffff"
      active-text-color="#FFF5EE"
      router
    >
      <el-menu-item index="/student/pchome">首页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <!-- <el-menu-item index="/student/pchome">首页</el-menu-item> -->
        <el-menu-item index="/student/pchome/perinfo">个人信息</el-menu-item>
        <el-menu-item
          index="1-3"
          disabled
        >密码修改</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">三个文明分</template>
        <el-submenu index="2-1">
          <template slot="title">查询分数</template>
          <el-menu-item index="/student/pchome/score">全部记录</el-menu-item>
          <el-menu-item
            index="2-1-2"
            disabled
          >只看加分</el-menu-item>
          <el-menu-item
            index="2-1-3"
            disabled
          >只看减分</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template slot="title">文明分类型</template>
          <el-menu-item index="/student/pchome/civil">全部类型</el-menu-item>
          <el-menu-item
            index="2-1-2"
            disabled
          >加分类型</el-menu-item>
          <el-menu-item
            index="2-1-3"
            disabled
          >减分类型</el-menu-item>
        </el-submenu>
        <el-menu-item
          index="2-3"
          disabled
        >申诉</el-menu-item>
      </el-submenu>
      <el-menu-item index="/student/pchome/join">加入我们</el-menu-item>
      <el-menu-item index="/student/pchome/about">关于我们</el-menu-item>
      <el-menu-item index="/student/pchome/qcxbook">反馈建议</el-menu-item>
      <el-menu-item
        index="4"
        disabled
      >更多功能，敬请期待</el-menu-item>
      <el-menu-item
        index="4"
        disabled
      ></el-menu-item>
      <el-dropdown
        class="user"
        @command="handleCommand"
      >
        <span class="el-dropdown-link">
          <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
          <span class="user-zi">{{name+'同学'}}</span>
        </span>
        <el-dropdown-menu
          slot="dropdown"
          style=" white-space:nowrap;"
        >
          <el-dropdown-item command="logout"><i class="el-icon-error"></i>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" class="user"></el-avatar> -->
    </el-menu>
  </div>
</template>
<script>
import * as getStu from '../../api/account';
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      name: ''
    };
  },
  mounted() {
    this.getusername()
    this.getfenbialv()
  },
  methods: {
    getfenbialv() {
      const x = window.screen.width;
      if (x > 1152 <= 1440) {
        var xx = document.getElementById('chang');// 查找元素
        xx.style.minWidth = '850px';// 改变样式
      } else if (x <= 1152) {
        var xxx = document.getElementById('chang');// 查找元素
        xxx.style.minWidth = '650px';// 改变样式
      } else {
        return
      }
    },
    handleSelect(key, keyPath) {

    },
    handleCommand(command) {
      if (command === 'logout') {
        this.doLogout();
      }
    },
    getusername: function () {
      const user = getStu.getStuInfo();
      user.then(res => {
        if (res.data !== undefined) {
          this.name = res.data.stuName
        }
      })
    },
    doLogout: function () {
      const result = this.$confirm('确定退出当前登录账号？', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then((result) => {
          if (result === 'confirm') {
            const out = getStu.doLogout();
            out.then(res => {
              if (res !== undefined) {
                this.$message({
                  message: res.info,
                  type: 'success',
                  duration: 2000
                })

                this.$router.push('/login') // 页面跳转
              }
            })
            // this.$store.commit(this.$storeTypes.LOGOUT);
            // this.$nextTick(function () {
            //   this.$router.push("/login");
            // });
          }
        })
        .catch(err => {

        });
    }

  }
};
</script>

<style  scoped>
.logo-pc {
  width: 600px;
  height: 100px;
  margin-top: 5px;
  margin-left: 15%;
}
.el-menu-demo {
  padding-left: 15%;
  padding-right: 15%;
  position: relative;

  height: 60px;
  margin-top: 0;
  white-space: nowrap;
}
#chang {
  min-width: 1200px;
}
.user {
  position: absolute;
  /* margin-right: 20%; */
  left: 78%;
  margin-top: 10px;
  text-align: right;
}
.user-zi {
  margin-left: 15px;
  position: absolute;
  bottom: 10px;
  white-space: nowrap;
}
.logo {
  width: 50%;
  height: 50%;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
  position: fixed;
  margin-left: 40%;
  margin-top: 10px;
  text-align: right;
}
.el-input,
.el-button,
.el-select {
  width: 35vw;
  max-width: 350px;
  min-width: 300px;
  text-align: center;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.1);
}

.el-button {
  color: floralwhite;
  background: #409eff;
}

.el-button:hover {
  background: #409eff;
  border-color: #409eff;
  transition: background 0.5s ease-in-out;
}
</style>