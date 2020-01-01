<template>
  <div>
    <div
      class="Score-Card"
      :style="{'display':(score >= 0.0 ? 'true' :'none')}"
    >
      <h4 class="Score-title"><span class="Score-time">{{time}}</span>
        <van-tag
          round
          type="success"
          size="medium"
        >{{detailCategory}}</van-tag><br>{{detailName}}<br>
        <!--<span class="Score-content">(备注：{{message}})</span></br>-->
        <span class="Score-num"><strong style="color: #47DB47;">+{{score}}</strong></span>
      </h4>
    </div>
    <div
      class="Score-Cardxx"
      :style="{'display':(score < 0.0 ? 'true' :'none')}"
    >
      <h4 class="Score-title"><span class="Score-time">{{time}}</span>
        <van-tag
          round
          type="danger"
          size="medium"
        >{{detailCategory}}</van-tag><br>{{detailName}}<br>
        <!--<span class="Score-content">(备注：{{message}})</span></br>-->
        <span class="Score-num"><strong style="color: red;">{{score}}</strong></span>
      </h4>
    </div>
  </div>

</template>

<script>

export default {

  props: {
    detailCategory: {
      type: String,
      default: 0
    },
    message: {
      type: String,
      default: 0
    },
    detailName: {
      type: String,
      default: 0
    },
    score: {
      type: Number,
      default: 0
    },
    time: {
      type: String,
      default: 'xxxx-xx-xx xx:xx:xx'
    }

    /*     rank: {
             type: Number,
             default: 0
         }*/
  }

}
</script>

<style>
.Score-Card {
  display: list-item;
  flex-direction: row;
  background-color: white;
  border: 3px solid #f2f3f5;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
  background-size: 100% 100%;
  background-image: url(../../../public/img/logozan.png);
}
.Score-Cardxx {
  display: list-item;
  flex-direction: row;
  background-color: white;
  border: 3px solid #f2f3f5;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
  background-size: 100% 100%;
  background-image: url(../../../public/img/logosub.png);
}
.Score-time {
  text-align: right;
  margin-right: 15px;
  margin-top: 40px;
  font-size: 10px;
}
.Score-content {
  text-indent: 2em;
  text-align: left;
  padding: 0;
  font-size: 13px;
}
.Score-title {
  margin-left: 35px;
  margin-right: 8px;
  font-size: 18px;
  padding: 0;
  margin-top: 0px;
  line-height: 30px;
  text-align: right;
  margin-bottom: -3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Score-num {
  font-size: 25px;
  text-align: right;
  left: 60%;
  top: 0px;
}
</style>
