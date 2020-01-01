<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="min-width:950px;width: 100%;border:2px solid #f8f8f8;"
  >
    <el-table-column width="100">
      <template slot-scope="scope">
        <el-tag size="medium">{{ scope.row.detailCategory }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="detailName"
      label="项目"
      width="300"
    >
    </el-table-column>
    <el-table-column
      prop="score"
      label="分值"
      sortable
      width="250px"
    >
      <template slot-scope="scope">
        <span :style="{'color':(scope.row.score >= 0.0 ? '#47DB47' :'red')}"><strong>{{ scope.row.score }}</strong></span>
      </template>
    </el-table-column>
    <el-table-column
      prop="remarks"
      label="备注"
    >
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="操作日期"
      sortable
      width="180"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
import * as getinfo from '../../api/account.js'
export default {
  data() {
    return {
      tableData: [],
      id: localStorage.getItem('login_account')
    }
  },
  mounted() {
    this.getScoreInfo()
  },
  methods: {

    formatter(row, column) {
      return row.address;
    },
    getScoreInfo: function () {
      const getInfo = getinfo.query(this.id);
      getInfo.then(res => {
        // this.userOptions.score= res.status
        if (res.data !== undefined) {
          this.tableData = res.data.filter(item => {
            return item.appeal === 'none' && item.cancel === '0'
          })
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
}
</script>

<style>
</style>
