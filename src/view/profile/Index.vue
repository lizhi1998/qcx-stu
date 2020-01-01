<template>
  <div class="profile-home">
    <div class="profile-avatar">
      <van-swipe
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item> <img
            src="../../../public/img/new.jpg"
            width="100%"
            height="100%"
          > </van-swipe-item>
        <van-swipe-item><img
            src="../../../public/img/show.png"
            width="100%"
            height="100%"
          ></van-swipe-item>
        <van-swipe-item> <img
            src="../../../public/img/1.png"
            width="100%"
            height="100%"
          > </van-swipe-item>
        <van-swipe-item>
          <router-link to="/student/join"><img
              src="../../../public/img/naxin2.jpg"
              width="100%"
              height="100%"
            ></router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <h6 class="profile-title">个人信息</h6>
    <div class="profile-panel">
      <van-cell-group>
        <van-field
          v-model="info.id"
          label="学号"
          readonly
        />
        <van-field
          v-model="info.name"
          label="姓名"
          readonly
        />
        <van-field
          v-model="info.academic"
          label="学院"
          readonly
        />
        <van-field
          v-model="info.major"
          label="专业"
          readonly
        />
        <van-field
          v-model="info.class"
          label="班级"
          readonly
        />
        <van-field
          v-model="info.dorm"
          label="宿舍"
          readonly
        />
        <van-field
          v-model="info.monitor"
          label="班长"
          readonly
        />
        <van-field
          v-model="info.dormHeader"
          label="舍长"
          readonly
        />
        <!--	<van-field v-model="info.free" label="转专业" readonly/> -->
      </van-cell-group>
      <van-field
        class="logout"
        error
        input-align="center"
        placeholder="退出登录"
        @click="doLogout"
        readonly
      />
      <!-- <h6 class="xxl">申诉记录</h6> -->
      <!-- <van-cell-group title="实名认证信息"></van-cell-group> -->
      <!--<div class="logout"> <van-button type="danger" @click="doLogout"  >注销</van-button> </div> -->
    </div>

    <!--
    <div class="profile-panel">
      <van-cell-group title="基本资料">
        <router-link :to="{name:'profileDetail',params:{id:1}}"><van-cell is-link="">个人信息</van-cell></router-link>
      </van-cell-group>
	  -->
    <!--
	  <van-cell-group title="第三方账号">
        <van-cell
          v-for="item in options"
          :key="item.value"
          :title="item.title"
          :value="item.value"
          :center="false"
          is-link
          @click="$toast('第三方账号绑定功能将于后续开放，届时可直接通过第三方账号登录平台')"
        ></van-cell>
      </van-cell-group>
	  -->
  </div>
  </div>

</template>
<script>

import * as getStu from '../../api/account';
import { Dialog } from 'vant';
export default {

  data() {
    return {

      info: {
        id: '',
        name: '',
        academic: '',
        major: '',
        class: '',
        dorm: '',
        monitor: '',
        dormHeader: '',
        free: ''
      }

    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo: function () {
      const get = getStu.getStuInfo();

      get.then(res => {
        if (res.data !== undefined) {
          this.info.id = res.data.stuId
          this.info.name = res.data.stuName
          this.info.academic = res.data.stuAcademic
          this.info.major = res.data.stuMajor
          this.info.class = res.data.stuClass
          this.info.dorm = res.data.stuDorm
          if (res.data.monitor == 1) { this.info.monitor = '任职中' } else { this.info.monitor = '否' }
          if (res.data.dormHeader == 1) { this.info.dormHeader = '任职中' } else { this.info.dormHeader = '否' }
          //  if(res.data.free == 1){ this.info.free = '已转出'}
          // else {this.info.free = '未转' }
        }
      })
    },
    doLogout: function () {
      Dialog.confirm({
        title: '登出提醒',
        message: '是否退出当前学生账号？'
      }).then(() => {
        const result = getStu.doLogout();
        this.$router.push('/login')
        // on confirm
      }).catch(() => {

        // on cancel
      });
    }
  }
};

</script>
<style scoped>
.profile-home {
  height: 200px;
  margin-top: 55px;
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
}

.profile-avatar {
  margin: 10px;
  max-width: 600px;
  max-height: 600px;
}

.profile-panel {
  margin-top: 10px;
  border-radius: 15px;
  height: auto;
  margin-bottom: 60px;
  /*	margin-left: 10px;
	margin-right: 10px; */
}

.profile-title {
  margin-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
  padding-top: 5px;
  padding-bottom: 0;
  color: #969799;
  font-size: 18px;
}
.van-cell-group__title {
  padding: 15px !important;
}
.logout {
  margin-top: 15px;
  color: red;
  text-align: center;
  padding-top: 10px;
  font-size: 15px;

  /*	font-weight:bold; */
}
</style>


