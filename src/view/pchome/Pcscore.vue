<template>
  <div class="pcscore-card">
    <h3><i class="el-icon-s-data"></i> 2019-2020学年上学期全部记录</h3>
    <Pcscore></Pcscore>
    <h3><i class="el-icon-s-order"></i> 上学期全部记录</h3>
    <p>敬请期待</p>
  </div>

</template>

<script>
import Pcscore from '@/component/module/ScoreTable.vue'

export default {
  components: {
    Pcscore
  }
  //    data() {
  //     return {
  // 		 info: {
  //           id:localStorage.getItem('login_account'),
  //           name:'',
  //           academic:'',
  //           major:'',
  //           class:'',
  //           dorm:'',
  // 		  monitor:'',
  // 		  dormHeader:'' ,
  // 		  free:'',
  // 		  score:''
  // 		},
  // 	};
  //   },
  //   mounted() {
  // 		this.getUserInfo()

  //       },
  // 		methods:{
  // 			getUserInfo:function(){
  // 				let get = getStu.getStuInfo();
  // 				get.then(res =>{
  // 					if (res.data !== undefined) {
  // 					this.info.id = res.data.stuId
  // 					this.info.name = res.data.stuName
  // 					this.info.academic = res.data.stuAcademic
  // 					this.info.major = res.data.stuMajor
  // 					this.info.class = res.data.stuClass
  // 					this.info.dorm = res.data.stuDorm
  // 					// this.info.score = res.data.stuScore
  // 					if(res.data.monitor == 1){ this.info.monitor = '任职中'}
  // 					else {this.info.monitor = '否' }
  // 					if(res.data.dormHeader == 1){ this.info.dormHeader = '任职中'}
  // 					else {this.info.dormHeader = '否' }
  // 					//  if(res.data.free == 1){ this.info.free = '已转出'}
  // 					// else {this.info.free = '未转' }
  // 					}
  // 				})

  // 			},
  // 		}

}
</script>

<style >
.pcscore-card {
  margin-left: 15%;
  margin-top: 20px;
  margin-right: 15%;
}
</style>