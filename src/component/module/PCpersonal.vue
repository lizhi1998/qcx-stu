<template>
  <div class="Pershow-Card">
    <!-- <div class="Pershow-userlogo">
			<img src="../../../public/img/user.jpg" width="100%" height="75%">
		</div>   	 -->
    <div class="Pershow-info">
      <i class="el-icon-user-solid"></i>
      <h3 class="Pershow-name">{{name}}</h3>
      <p class="Pershow-professional">{{professional}}</p>
      <!-- <p class="Pershow-professional">{{stuDorm}}</p> -->
      <el-divider></el-divider>
      <p class="Pershow-score"><span style="font-size: 16px;">本学期文明分: </span><strong
          :style="{'color':(score >= 100.0 ? '#47DB47' :'red')}"
          class="Pershow-scores"
        >{{score}}</strong></p>
      <el-divider></el-divider>
      <p>评分：</p>
      <el-rate
        v-model="bot"
        show-text
      >
      </el-rate>
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
      >
      </el-rate>
      <el-divider></el-divider>
      <p>留言建议：</p>
      <router-link to="/student/pchome/qcxbook">点击进入留言板</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 0
    },
    /*   messagesum: {
           type: Number,
           default: 0
       },*/
    professional: {
      type: String,
      default: 0
    },
    stuDorm: {
      type: String,
      default: 0
    },
    score: {
      type: String,
      default: 0
    }
    /*     rank: {
             type: Number,
             default: 0
         }*/
  },
  data() {
    return {
      value: 4.0,
      bot: ""
    }
  }
}
</script>

<style>
.Pershow-Card {
  background-color: white;
  border-radius: 10px;
  height: 450px;
  width: 200px;
  padding: 20px;
  /* border:10px solid #409EFF; */
  border: 2px solid #f8f8f8;
}
.Pershow-userlogo {
  width: 80px;
  height: 100px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 25px;
  margin-bottom: 0;
  text-align: center;
}
.Pershow-info {
  margin: 0;
  padding: 0;
}
.Pershow-professional {
  font-size: 15px;
  color: #969799;
  margin: 0;
}
.Pershow-name {
  font-size: 20px;
  margin-bottom: 5px;
}
.Pershow-score {
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 70px;
}
.Pershow-scores {
  font-size: 22px;
}
</style>
