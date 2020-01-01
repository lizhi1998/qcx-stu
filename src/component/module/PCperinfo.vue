<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <span><i class="el-icon-info"></i><strong>个人信息</strong></span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
    </div>
    <div class="text item">
      {{'学号：'+stuId }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'姓名：'+stuName }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'学院：'+stuAcademic }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'专业：'+stuMajor }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'班级：'+stuClass }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'宿舍：'+stuDorm }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'班长：'+stuban }}
      <el-divider></el-divider>
    </div>
    <div class="text item">
      {{'舍长：'+stuse }}
      <el-divider></el-divider>
    </div>
  </el-card>
</template>


<script>

export default {
  props: {
    stuName: {
      type: String,
      default: 0
    },
    stuId: {
      type: String,
      default: 0
    },
    stuClass: {
      type: String,
      default: 0
    },
    stuDorm: {
      type: String,
      default: 0
    },
    stuAcademic: {
      type: String,
      default: 0
    },
    stuMajor: {
      type: String,
      default: 0
    },
    stuban: {
      type: String,
      default: 0
    },
    stuse: {
      type: String,
      default: 0
    }

  }
}
</script>

<style>
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

.box-card {
  width: 400px;
}
</style>
