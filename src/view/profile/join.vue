<template>
  <div>
    <h6 class="profile-title">加入我们</h6>
    <form
      action="http://www.wuyo.fun/student/pchome/cxyadd.php"
      method="post"
      id="commentform"
    >
      <el-input
        type='text'
        name="class"
        id="class"
        v-model="info.class"
        v-show="false"
      ></el-input>
      <van-field
        class="qcx-book2"
        type="number"
        name="id"
        id="id"
        required
        clearable
        label="学号"
        placeholder="请输入学号"
        v-model="info.id"
      />
      <van-field
        class="qcx-book2"
        name="name"
        id="name"
        required
        clearable
        label="姓名"
        placeholder="请输入姓名"
        v-model="info.name"
      />
      <van-field
        class="qcx-book2"
        name="qq"
        id="qq"
        required
        clearable
        type="number"
        label="QQ号"
        placeholder="请输入QQ号"
        v-model="info.qq"
      />
      <van-field
        class="qcx-book2"
        name="reason"
        id="reason"
        required
        clearable
        label="自我简介"
        placeholder="请简单自我介绍一下"
        v-model="info.reason"
      />
      <div style="margin-left:10%;">
        <span style="margin-right:35px;font-size:14px;margin-bottom: 10px;margin-left: 15px;margin-top:30px;"> 选择方向</span>
        <van-field
          name="group"
          id="group"
          v-model="info.job"
          v-show="false"
        />
        <el-radio
          v-model="info.job"
          label="前端"
        >前端</el-radio>
        <el-radio
          v-model="info.job"
          label="后端"
        >后端</el-radio>
      </div>
      <!-- <el-input   label="用户名" class="qcx-book" type='text' name="id" id="id" v-model="info.id"  ></el-input>
<el-input  class="qcx-book" type='text' name="name" id="name" v-model="info.name"  ></el-input>
<el-input class="qcx-book" type='text' name="qq" id="qq" v-model="info.reason" ></el-input>
<el-input class="qcx-book" type='text' name="reason" id="reason" v-model="info.reason" ></el-input> -->
      <div style="margin-top:20px;">
        <input
          type="submit"
          class="el-button"
          id="submit"
          tabindex="5"
          value="提交申请"
        />
      </div>
    </form>
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
        class: '',
        qq: '',
        reason: '',
        job: ''
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
          this.info.class = res.data.stuClass
        }
      })
    }
  }
};

</script>
<style scoped>
.qcxbook-card {
  margin-left: 15%;
  margin-top: 20px;
  margin-right: 15%;
}
.profile-title {
  margin-left: 5%;
  margin-top: 50px;
  margin-bottom: 10px;
  margin-right: 0;
  padding-top: 5px;
  padding-bottom: 0;
  color: #969799;
  font-size: 18px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card1 {
  width: 100%;
  min-width: 800px;
  height: 400px;
}
.book-box {
  padding-top: 50px;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
}
.qcx-book2 {
  /* margin-top: 200px; */
  margin-left: 10%;
  margin-right: 15%;
  text-align: left;
  margin-bottom: 10px;
  width: 80%;
}
.el-button {
  background-color: #1e90ff;
  color: white;
  margin-left: 10%;
  width: 80%;
}
</style>


