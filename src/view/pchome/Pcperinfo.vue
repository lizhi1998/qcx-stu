<template>
  <div class="perinfo-card">
    <Pcperinfo
      :stuId="info.id"
      :stuName="info.name"
      :stuAcademic="info.academic"
      :stuMajor="info.major"
      :stuClass="info.class"
      :stuDorm="info.dorm"
      :stuban="info.monitor"
      :stuse="info.dormHeader"
    ></Pcperinfo>
    <!-- <div class="kebiao-card">
    </div>  -->
  </div>

</template>

<script>
import Pcperinfo from '@/component/module/PCperinfo.vue'
import * as getStu from '../../api/account';
export default {
  components: {
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
        if (res.data !== undefined) {
          this.info.id = res.data.stuId
          this.info.name = res.data.stuName
          this.info.academic = res.data.stuAcademic
          this.info.major = res.data.stuMajor
          this.info.class = res.data.stuClass
          this.info.dorm = res.data.stuDorm
          // this.info.score = res.data.stuScore
          if (res.data.monitor == 1) { this.info.monitor = '任职中' } else { this.info.monitor = '否' }
          if (res.data.dormHeader == 1) { this.info.dormHeader = '任职中' } else { this.info.dormHeader = '否' }
          //  if(res.data.free == 1){ this.info.free = '已转出'}
          // else {this.info.free = '未转' }
        }
      })
    }
  }

}
</script>

<style >
.perinfo-card {
  margin-left: 15%;
  margin-top: 20px;
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
</style>