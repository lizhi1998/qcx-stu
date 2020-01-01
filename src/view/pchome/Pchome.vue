<template>
  <div>
    <div class="showimg">
      <!-- <blockquote class="qcx-quote" >首页<br>
      </blockquote> -->
      <div class="perinfo">
        <Pcperinfo
          :name=" info.name"
          :professional="info.class"
          :stuDorm="info.dorm"
          :score="info.score"
        >
        </Pcperinfo>
      </div>
      <div class="imgshow">
        <Pcshow></Pcshow>
      </div>
      <div class="join">
        <i class="el-icon-menu"><span class="join-title"><strong>我的应用</strong></span></i>
        <h3 style="font-size:80px;margin-top:40px;margin-left:20px;">
          <el-tooltip
            class="item"
            effect="dark"
            content="开发中，敬请期待！"
            placement="bottom-start"
          >
            <i class="el-icon-circle-plus-outline"></i>
          </el-tooltip>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import ScoreTable from '@/component/module/ScoreTable.vue'
import Perinfo from '@/component/module/PCperinfo.vue'
import Pcshow from '@/component/module/PCshow.vue'
import Pcperinfo from '@/component/module/PCpersonal.vue'
import * as getStu from '../../api/account';

export default {
  components: {
    ScoreTable,
    Perinfo,
    Pcshow,
    Pcperinfo
  },
  data() {
    return {
      info: {
        id: localStorage.getItem('login_account'),
        name: '',
        academic: '',
        major: '',
        class: '',
        dorm: '',
        monitor: '',
        dormHeader: '',
        free: '',
        score: ''
      }
    };
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo: function () {
      const get = getStu.getStuInfo();
      get.then(res => {
        // console.log(res)
        if (res.data !== undefined) {
          this.info.id = res.data.stuId
          this.info.name = res.data.stuName
          this.info.academic = res.data.stuAcademic
          this.info.major = res.data.stuMajor
          this.info.class = res.data.stuClass
          this.info.dorm = res.data.stuDorm
          this.info.score = res.data.stuScore
          if (res.data.monitor == 1) { this.info.monitor = '任职中' } else { this.info.monitor = '否' }
          if (res.data.dormHeader == 1) { this.info.dormHeader = '任职中' } else { this.info.dormHeader = '否' }
          //  if(res.data.free == 1){ this.info.free = '已转出'}
          // else {this.info.free = '未转' }
        }
      })
    }
  }

};
</script>

<style >
.el-icon-arrow-right {
  text-align: center;
}
.showimg {
  margin-top: 10px;
  display: flex;
}
.qcx-quote {
  margin-top: 0;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  padding: 10px;
  line-height: 22px;
  border-left: 5px solid #4169e1;
  border-radius: 0 2px 2px 0;
  background-color: white;
}
.showleft {
  position: absolute;
  width: 50%;
  height: 100%;
  right: 50%;
}
.showright {
  position: absolute;
  width: 50%;
  height: 100%;
  left: 30%;
}
.perinfo {
  margin-left: 15%;
  margin-top: 15px;
}
.imgshow {
  margin-top: 15px;
  margin-left: 40px;
  position: relative;
}
.join {
  background-color: white;
  padding: 20px;
  height: 500px;
  min-height: 300px;
  min-width: 120px;
  width: 500px;
  margin-left: 40px;
  margin-right: 15%;
  margin-top: 15px;
  position: relative;
  border: 2px solid #f8f8f8;
}
.join-title {
  font-size: 18px;
  margin-left: 5px;
}
</style>
