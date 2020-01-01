<template>
  <div>
    <h1 v-if="qcxinfo">后台系统维护中。。。<br>暂时无法使用，预计恢复时间：待定</h1>
    <div
      class="alls"
      v-if="mobile"
    >
      <div class="panel">
        <img
          class="logologin"
          src="../../public/img/logo3.png"
        />
        <van-cell-group>
          <van-field
            v-model="loginForm.account"
            left-icon="friends"
            label="学号"
            placeholder="请输入学号"
            @focus="gaibian()"
            @blur="huifu()"
          />
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="loginForm.password"
            left-icon="lock"
            label="密码"
            type="password"
            placeholder="请输入密码"
            @focus="gaibian()"
            @blur="huifu()"
          />
        </van-cell-group>
        <van-cell-group>
          <router-link :to="{}">
            <van-button
              type="primary"
              @click="doLogin"
            >登录</van-button>
          </router-link>
        </van-cell-group>

        <div style="display: flex;">
          <span class="doloin">
            <van-checkbox
              v-model="checked"
              shape="sqare"
            >记住密码</van-checkbox>
          </span>
          <!-- <span ><a :href="'https://qcx.fjut.edu.cn/admin/login'" style="text-align: right;font-size: 10px; color: #096DD3; margin-top: 25px;white-space:nowrap;">管理员登录入口</a></span> -->
        </div>
      </div>
      <P
        id="tips"
        style="text-align:center;cursor:pointer;"
      ><span @click="$toast('如忘记密码，请联系辅导员！(初始密码为：123456)')">忘记密码&nbsp;&nbsp;&nbsp;</span>|<span @click="$toast('请确认是否连接了校园网！（非校园网无法登录）')">&nbsp;&nbsp;&nbsp;无法登录</span></P>
      <P id="copy">Copyright ©2018-2019 By 苍小易工作室</P>
    </div>
    <div v-if="pc">
      <div class="login-module">
        <!--<img src='../../../static/images/login-logo.png' style='width:auto;height:auto'>-->
        <div class="hontr">
          <img
            src="../../public/img/logologin.png"
            style='height:65px;width:400px;margin-left: 250px;margin-top: 15px;'
          >
        </div>
        <div class="login-form-container">
          <header></header>
          <div class="right">
            <el-form
              class="login-form"
              ref="login"
              :style="loginClass"
              :model='loginForm'
              :rules='loginRules'
              status-icon
              @keyup.native.enter='loginEvent'
            >
              <h4 style="padding-top: 0;margin-top: 0;"><img
                  src="../../public/img/logoin.png"
                  style="height: 50px;width: 50px;margin-right: 15px;"
                ><span style="font-size: 20px;">学生登录</span></h4>
              <el-form-item prop='account'>
                <el-input
                  placeholder='学号'
                  v-model='loginForm.account'
                  type='text'
                  prefix-icon="el-icon-user"
                ></el-input>
              </el-form-item>
              <el-form-item
                class='password-input'
                prop='password'
              >
                <el-input
                  placeholder='密码'
                  v-model='loginForm.password'
                  type='password'
                  prefix-icon="el-icon-lock"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type='primary'
                  class='login-btn'
                  @click='doLogin'
                >登录</el-button>
              </el-form-item>
              <p style="text-align:right;cursor:pointer;white-space:nowrap;"> <span style="margin-right: 200px;">
                  <el-checkbox
                    v-model="checked"
                    size="medium"
                  >记住密码</el-checkbox>
                </span> <span
                  style="color: #409EFF;font-size: 15px;"
                  @click="forget()"
                >忘记密码？</span></p>
              <div style="text-align: right;font-size: 13px;color: #1BCBB4; margin-top: 0;"><a
                  :href="'https://qcx.fjut.edu.cn/admin/login'"
                  style="color: #1BCBB4;"
                ><i class="el-icon-s-home
"></i>管理员登录入口</a></div>
            </el-form>
          </div>

        </div>
        <!-- <diV class="dibu"> -->

        <!-- </div> -->
      </div>
      <footer>
        <a
          :href="'https://www.fjut.edu.cn'"
          target="_blank"
        >福建工程学院首页</a> | <a
          :href="'http://www.yiban.cn/school/index?school_id=549'"
          target="_blank"
        >苍霞易班</a> | <a
          :href="'https://dh.fjut.edu.cn'"
          target="_blank"
        >校内导航</a> | <a
          :href="'https://nids.fjut.edu.cn/authserver/login?service=http://i.fjut.edu.cn/index.portal'"
          target="_blank"
        >
          校园信息门户</a> | <a
          :href="'https://jwxt.fjut.edu.cn/jwglxt/xtgl/login_slogin.html'"
          target="_blank"
        >教务管理系统</a> | <a
          :href="'https://mail.fjut.edu.cn'"
          target="_blank"
        >教师邮件系统</a> | <a
          :href="'https://jwc.fjut.edu.cn/2186/list.htm'"
          target="_blank"
        >学校年历</a>
        <br><br>
        Copyright ©2018-2019 By 苍小易网络文化工作室 福建省福州市大学新区学府南路33号 350118
      </footer>
    </div>
  </div>
</template>
<script>
import * as loginApi from '../api/account.js';

export default {
  data() {
    return {
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: {
          required: true,
          message: '请输入学号',
          trigger: 'blur'
        },
        password: {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      },
      checked: '',
      pc: false,
      mobile: false,
      clientHeight: window.outerHeight,
      loginClass: {
        top: ''
      },
      qcxinfo: ''

    };
  },
  mounted() {
    this.getCookie()
    this.getQcxinfo()
    this.getHeight()
    const _this = this;// 赋值vue的this
    window.onresize = () => {
      // 调用methods中的事件
      _this.getHeight();
    }
  },
  // 注销window.onresize事件
  destroyed() {
    window.onresize = null;
  },

  // watch:{
  //       clientHeight(){
  //       console.log('ok')
  //       }
  // },
  methods: {
    isMobile: function () {
      var sUserAgent = navigator.userAgent.toLowerCase();
      const mobile = sUserAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      if (mobile === null) {
        this.pc = true;
        this.mobile = false;
      } else {
        this.pc = false;
        this.mobile = true;
      }
    },
    getHeight: function () {
      this.clientHeight = window.outerHeight
      if (this.clientHeight <= 679) {
        this.loginClass.top = '35.453px'
      } else {
        this.loginClass.top = '10%'
      }
      //  console.log(this.clientHeight)
    },
    // 忘记密码提示框
    forget() {
      this.$notify({
        title: '忘记密码',
        message: '如忘记密码，请联系辅导员！（初始密码为：123456）',
        type: 'warning',
        duration: 2000
      });
    },
    // 回车事件监听，按下enter键登录
    loginEvent() {
      if (this.loginForm.account !== '' && this.loginForm.password !== '') {
        this.doLogin();
      } else {
        return
      }
    },
    gaibian: function () {
      var www = document.getElementById('copy');// 查找元素
      www.style.position = 'relative';// 改变样式
      var mmm = document.getElementById('tips');// 查找元素
      mmm.style.position = 'relative';// 改变样式
    },

    huifu: function () {
      var www = document.getElementById('copy');// 查找元素
      www.style.position = 'absolute';// 改变样式
      var mmm = document.getElementById('tips');// 查找元素
      mmm.style.position = 'absolute';// 改变样式
    },

    /**
     * 登录请求
     */
    setCookie: function (c_pwd, exdays) {
      var exdate = new Date();// 获取时间

      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);// 保存的天数
      // 字符串拼接cookie

      window.document.cookie = 'password' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString();
    },
    // 读取cookie
    getCookie: function () {
      this.checked = true;
      if (document.cookie.length > 0) {
        var arr = document.cookie.split('; ');// 这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split('=');// 再次切割
          // 判断查找相对应的值
          if (arr2[0] == 'account') {
            this.loginForm.account = arr2[1];// 保存到保存数据的地方
          } else if (arr2[0] == 'password') {
            this.loginForm.password = arr2[1];
          }
        }
      }
    },
    // 清除cookie
    clearCookie: function () {
      this.setCookie('', -1);// 修改2值都为空，天数为负1天就好了
    },
    // 页面加载调用获取cookie值
    getQcxinfo: function () {
      const resultqcx = loginApi.getQcxinfo()
      resultqcx.then(res => {
        if (res.status === 200) {
          this.qcxinfo = false
          this.isMobile()
        } else {
          this.qcxinfo = true
          this.pc = false
          this.mobile = false
        }
      })
    },

    doLogin: function () {
      if (this.loginForm.account == '') {
        this.$toast('学号不能为空');
        return false
      }
      if (this.loginForm.password == '') {
        this.$toast('密码不能为空');
        return false
      }

      // 保存的账号
      var name = this.loginForm.account;
      // 保存的密码
      var pass = this.loginForm.password;
      var exdate = new Date();// 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * 360);// 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'account' + '=' + name + ';path=/;expires=' + exdate.toGMTString();
      if (this.checked === true) {
        // 传入账号名，密码，和保存天数3个参数
        this.setCookie(pass, 360);
      } else {
        this.clearCookie();
      }
      const result = loginApi.doLogin({
        account: this.loginForm.account,
        password: this.loginForm.password
      });

      result.then(res => {
        // console.log(res)
        if (res.status == 200 && res.info == 'Student') {
          localStorage.setItem('login_account', this.loginForm.account)
          localStorage.setItem('login_password', this.loginForm.password)
          if (this.pc === false && this.mobile === true) {
            this.$router.push('/student/home')
          } else if (this.pc === true && this.mobile === false) {
            this.$router.push('/student/pchome')
          } else { this.$router.push('/student/home') }
        } else if (res.status == 200 && res.info == 'Master') {
          alert('系统检测到该账号为管理员账号，请在登录按钮下方点击管理员登录入口进行登录！');
        } else { this.$router.push('/student/login') }
      }
      );
    }
  }
};
</script>

<style lang="less" scoped>
@themeColor: #3a5fcd;
.alls {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  position: fixed;

  text-align: center;
}
.panel {
  margin: 15px;
  padding: 20px;
  .van-cell-group {
    margin: 25px 0;
  }

  .van-button {
    display: block;
    width: 100%;
    border-color: @themeColor;
    background-color: @themeColor;
  }
}
#copy {
  position: absolute;
  height: 50px;
  text-align: center;
  width: 100%;
  color: #969799;
  font-size: 10px;
  bottom: 0;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}
.logologin {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  pointer-events: none;
}
.wangji {
  margin-right: 5px;
  text-align: right;
  display: block;
  font-size: 14px;
  color: #7d7e80;
  padding-top: 0;
  margin-top: 0;
  width: 20%;
  white-space: nowrap;
}
.doloin {
  font-size: 15px;
  margin-top: 0;
  padding-top: 0;
  color: #7d7e80;
  display: block;
  text-align: left;
  width: 80%;
}
#tips {
  position: absolute;
  height: 50px;
  text-align: center;
  width: 100%;
  color: #969799;
  font-size: 14px;
  bottom: 30px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}
a {
  text-decoration: none;
  color: #096dd3;
}
a:hover,
a:visited,
a:link,
a:active {
  // 做到只设置一次，就可以使所有a标签的四种状态都和本身颜色保持一致，样式代码该怎么写
}

.hontr {
  width: 100%;
  height: 100px;
  background-color: white;
  position: relative;
}
html,
body {
  margin: 0;
  padding: 0;
}

.login-module {
  /* background: url("https://img.alicdn.com/tfs/TB1kOoAqv1TBuNjy0FjXXajyXXa-600-600.png") 0% 0% / contain rgb(240, 242, 245); */
  background-image: url("../../public/img/backgroud.jpg");
  height: 100%;
  width: 100%;
  background-size: cover;
  min-height: 600px;
}

.login-form-container {
  position: relative;
  height: 60vh;
  z-index: 1;
}
.right {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 50%;
}
.login-form {
  // margin-bottom: 5vh;
  background-color: white;
  border: 10px solid #409eff;
  padding: 20px;
  margin: 10px;
  position: absolute;
  left: 180px;
  // top:31px;
  // top:12%;
  // left: 170px;
  // bottom: 11%;
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
  position: relative;
  // margin-top: 15px;
  // margin-bottom: 5vh;
  padding-top: 20px;
  white-space: nowrap;
  font-size: 14px;
  text-align: center;
  /* margin-bottom: 20px; */
  background-color: white;
  color: rgba(0, 0, 0, 0.45) !important;
}
</style>

