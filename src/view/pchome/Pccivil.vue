<template>
  <div class="pccivil-card">
    <h3><i class="el-icon-s-order"></i> 三个文明分类型</h3>
    <el-table
      v-loading="loading"
      :data="userList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="min-width:950px;width: 100%;border:2px solid #f8f8f8;"
    >
      <el-table-column width="150px">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.civilType }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="civilReason"
        label="项目"
        width="500px"
      >
      </el-table-column>
      <el-table-column
        prop="civilScore"
        label="普通分值"
        width="200px"
      >
        <template slot-scope="scope">
          <span :style="{'color':(scope.row.civilScore >= 0.0 ? '#47DB47' :'red')}"><strong>{{ scope.row.civilScore }}</strong></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="civilScoreLeader"
        label="负责人分值"
      >
        <template slot-scope="scope">
          <span :style="{'color':(scope.row.civilScoreLeader >= 0.0 ? '#47DB47' :'red')}"><strong>{{ scope.row.civilScoreLeader }}</strong></span>
        </template>
      </el-table-column>
    </el-table>
    <div class="yesu">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        background
        layout="total, prev, pager, next"
        :total="userList.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import * as getinfo from '../../api/account.js';
export default {
  data() {
    return {
      tableData: [],
      currentPage: 1, // 初始页
      pagesize: 10, //    每页的数据
      userList: []
    }
  },
  mounted() {
    this.getScoreInfo()
    this.handleUserList()
  },
  methods: {

    formatter(row, column) {
      return row.address;
    },
    handleSizeChange: function (size) {
      this.pagesize = size;
      // console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
      // console.log(this.currentPage) // 点击第几页
    },
    getScoreInfo: function () {
      const getInfo = getinfo.getCivil();
      getInfo.then(res => {
        // this.userOptions.score= res.status
        if (res.data !== undefined) {
          this.userList = res.data
          // this.scoreAdd = res.data.filter(item => {
          // return item.appeal === 'none' && item.cancel === '0' && item.score >='0.0'
          //                                   } )
          // this.scoreSub = res.data.filter(item => {
          // return item.appeal === 'none' && item.cancel === '0' && item.score <'0.0'
          // 								})
        }
      })
    }

  }

  //  props: {
  //     stuId: {
  //         type: String,
  //         default: 0
  //     },
  //     message: {
  //         type: String,
  //         default: 0
  //     },
  // 	detailName: {
  // 		type: String,
  // 		default: 0
  // 	},
  //     score: {
  //         type: Number,
  //         default: 0
  //     },
  // 	time:{
  // 		type:String,
  // 		default:'xxxx-xx-xx xx:xx:xx'
  //     },

  /*     rank: {
           type: Number,
           default: 0
       }*/
  // },

}
</script>

<style>
.pccivil-card {
  margin-left: 15%;
  margin-top: 20px;
  margin-right: 15%;
}
.yesu {
  text-align: center;
  margin-top: 10px;
}
</style>
