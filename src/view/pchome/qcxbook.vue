<template>
  <div class="qcxbook-card">

    <h3><i class="el-icon-s-comment"></i>反馈建议</h3>
    <el-card class="box-card1">
      <div
        slot="header"
        class="clearfix"
      >
        <span>感谢各位同学给我们提出意见及建议！ 如果想<span style="color:red;">加入我们</span>的团队请点击上方的“加入我们”进行<span style="color:red;">报名</span>。</span>
      </div>
      <div class="book-box">
        <form
          action="http://www.wuyo.fun/student/pchome/qcxadd.php"
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
          <el-input
            type='text'
            name="name"
            id="name"
            v-model="info.name"
            v-show="false"
          ></el-input>
          <el-input
            type='text'
            name="id"
            id="id"
            v-model="info.id"
            v-show="false"
          ></el-input>
          <el-input
            class="qcx-book"
            type="textarea"
            name="comment"
            id="comment"
            v-model="text"
            placeholder="请输入留言内容"
            maxlength="120"
            :autosize="{ minRows: 4, maxRows: 6}"
            size="medium"
            clearable
            show-word-limit
          >
          </el-input>
          <div style="margin-top:20px;">
            <input
              type="submit"
              class="el-button"
              id="submit"
              tabindex="5"
              value="点击留言"
              style="width:100%;"
            />
          </div>
        </form>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as getStu from '../../api/account';

export default {
  components: {

  },
  data() {
    return {
      info: {
        id: localStorage.getItem('login_account'),
        name: '',
        class: ''
      },
      text: ''
    };
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

}
</script>

<style >
.qcxbook-card {
  margin-left: 15%;
  margin-top: 20px;
  margin-right: 15%;
}
.kebiao-card {
  background-color: white;
  padding: 20px;
  height: 500px;
  min-height: 300px;
  min-width: 300px;
  width: 500px;
  margin-left: 40px;
  margin-top: 15px;
  position: relative;
  border: 2px solid #f8f8f8;
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
.qcx-book {
  width: 100%;
}
.el-button {
  background-color: #1e90ff;
  color: white;
}
</style>