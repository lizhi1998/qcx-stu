<template>
  <div class="showcard">
    <el-carousel
      indicator-position="outside"
      height="300px"
    >
      <el-carousel-item>
        <img
          src="../../../public/img/1.png"
          style="width:100%;height:100%;"
        >
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="../../../public/img/show.png"
          style="width:100%;height:100%;"
        >
      </el-carousel-item>
      <el-carousel-item>
        <router-link to="/student/pchome/join"><img
            src="../../../public/img/naxin2.jpg"
            style="width:100%;height:100%;"
          ></router-link>
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="../../../public/img/new.jpg"
          style="width:100%;height:100%;"
        >
      </el-carousel-item>
    </el-carousel>
    <el-card
      class="card"
      shadow="hover"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span><strong>最新分数记录</strong></span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div
        v-for="o in 4"
        :key="o"
        class="text item"
      >
        {{'首页升级建设中，敬请期待 ' }}
      </div>
    </el-card>
  </div>

</template>

<style>
.showcard {
  width: 500px;
  height: auto;
  /* border:2px solid #f8f8f8; */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.card {
  text-align: left;
}
</style>