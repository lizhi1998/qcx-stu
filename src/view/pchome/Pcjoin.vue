<template>
  <div class="login-wrapper">
    <div class="pcscore-card">
      <h3><i class="el-icon-s-promotion"></i>加入我们</h3>
    </div>
    <div class="login-container">
      <el-form
        class="login-form"
        name="myForm"
        action="http://www.wuyo.fun/student/pchome/cxyadd.php"
        method="post"
        v-if="succCard === false"
        ref="recruitForm"
        :model="recruitForm"
        :rules='rules'
        status-icon
      >
        <el-form-item
          prop='id'
          label="学号"
        >
          <el-input
            placeholder='学号'
            v-model="recruitForm.id"
            type='text'
            name="id"
            id="id"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop='name'
          label="姓名"
        >
          <el-input
            placeholder='姓名'
            v-model="recruitForm.name"
            type='text'
            name="name"
            id="name"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop='qq'
          label="QQ号"
        >
          <el-input
            placeholder='QQ号'
            v-model="recruitForm.qq"
            type='text'
            name="qq"
            id="qq"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop='mail' label="E-MAIL">-->
        <!--<el-input placeholder='邮箱地址' v-model='recruitForm.mail' type='mail'></el-input>-->
        <!--</el-form-item>-->
        <el-input
          type='text'
          name="class"
          id="class"
          v-model="recruitForm.class"
          v-show="false"
        ></el-input>
        <el-form-item
          prop='group'
          label="选择方向"
        >
          <el-select
            v-model="recruitForm.group"
            name="group"
            id="group"
          >
            <el-option
              value="前端"
              label="前端"
              key="前端"
            ></el-option>
            <el-option
              value="后端"
              label="后端"
              key="后端"
            ></el-option>
            <el-option
              value="都可以"
              label="都可以"
              key="都可以"
            ></el-option>
            <el-option
              value="没想好"
              label="没想好"
              key="没想好"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          prop='reason'
          label="自我简介"
        >
          <el-input
            placeholder='简单的自我简介'
            v-model="recruitForm.reason"
            type="textarea"
            maxlength="50"
            show-word-limit
            name="reason"
            id="reason"
          ></el-input>
        </el-form-item>
        <el-form-item class="qcx-btn-group">
          <input
            type="submit"
            class="el-button"
            id="submit"
            tabindex="5"
            value="提交申请"
          />
          <!-- <el-button type="submit" id="submit">提交申请</el-button> -->
        </el-form-item>
      </el-form>
      <el-form
        class="login-form"
        v-else
      >
        <i class="el-icon-success qcx-recruit__succ">
          <span>提交成功</span>
        </i>
      </el-form>
    </div>
  </div>
</template>

<script>
import * as getStu from '../../api/account';
export default {
  name: 'Pcjoin',
  data() {
    return {
      recruitForm: {
        id: localStorage.getItem('login_account'),
        name: '',
        class: '',
        dorm: '',
        qq: '',
        group: '',
        mail: '',
        reason: ''
      },
      rules: {
        id: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value !== '') {
              value = this.recruitForm.id
              const result = /^\d{10}$/.test(value)
              if (result === false) {
                callback(new Error('请输入正确的学号格式'))
              } else {
                callback()
              }
            } else {
              callback(new Error('请输入学号'))
            }
          },
          trigger: 'change'
        }],
        name: {
          required: true,
          message: '请输入姓名',
          trigger: 'blur'
        },
        qq: [{
          required: true,
          validator: (rule, value, callback) => {
            if (value !== '') {
              value = this.recruitForm.qq
              const result = /^[1-9][0-9]{4,10}$/.test(value)
              if (result === false) {
                callback(new Error('请输入正确的QQ号'))
              } else {
                callback()
              }
            } else {
              callback(new Error('请输入QQ号'))
            }
          },
          trigger: 'change'
        }],
        mail: {
          required: true,
          message: '输入邮箱地址',
          trigger: 'blur'
        },
        reason: {
          required: true,
          message: '请简单介绍一下自己',
          trigger: 'blur'
        },
        group: {
          required: true,
          message: '请选择组别',
          trigger: 'change'
        }
      },
      succCard: false
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    // validateForm: function () {
    //   var x = document.getElementById('qq').value;
    //   if (x == null || x == '') {
    //     alert('姓必须填写');
    //     return false;
    //   }
    // },
    getUserInfo: function () {
      const get = getStu.getStuInfo();
      get.then(res => {
        if (res.data !== undefined) {
          this.recruitForm.class = res.data.stuClass
          this.recruitForm.dorm = res.data.stuDorm
          this.recruitForm.name = res.data.stuName
        }
      })
    },

    submit: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return
        } else {
          console.log('error submit!!');
          return false;
        }
      });

      // const data = `stuId=${this.recruitForm.id}&stuName=${this.recruitForm.name}` +
      //  `&qq=${this.recruitForm.qq}&group=${this.recruitForm.group}&reson=${this.recruitForm.reason}`
      //     this.$axios.post('http://www.wuyo.fun/add.php') //url为php运行于自带服务器的浏览器地址
      //       .then(res=>{console.log(res)})
      //       .catch(err=>{console.log(err)})
      // this.$axios.post('./phpfile.php', data)
    }
  }

}
</script>

<style scoped>
.login-wrapper {
  margin: 0;
  padding: 0;
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-width: 600px;
  z-index: 1;
  margin-left: 15%;
  margin-right: 15%;
  border: 2px solid #f8f8f8;
}

.login-form {
  margin-bottom: 5vh;
}

.el-form-item {
  margin: 5px;
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
  background-color: #1e90ff;
  color: white;
}
/* 
  .el-button:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    transition: background 0.5s ease-in-out;
  } */

.el-form-item p {
  margin: 0;
  color: #0cbad8 !important;
}

.form-title {
  color: #1bcbb4;
  text-align: center;
  margin-bottom: 30px;
}

footer {
  padding-bottom: 35px;
  position: relative;
  width: 100%;
  font-size: 14px;
  text-align: center;
  /* margin-bottom: 20px; */
  color: rgba(0, 0, 0, 0.45) !important;
}

.qcx-btn-group {
  margin-top: 30px;
}

.qcx-recruit__succ {
  font-size: 30px;
  color: #00d1b2;
}

.qcx-recruit__succ span {
  margin: 0 0 0 15px;
}
.pcscore-card {
  margin-left: 15%;
  margin-top: 20px;
  margin-right: 15%;
}
</style>
