<template>
  <div class="Pershow-Card">
    <div class="Pershow-userlogo">
      <img
        src="../../../public/img/user.jpg"
        width="100%"
        height="75%"
      >
    </div>
    <div class="Pershow-info">
      <h3 class="Pershow-name">{{name}}</h3>
      <p class="Pershow-professional">{{professional}}</p>
      <p class="Pershow-score"><span style="font-size: 16px;">本学期文明分: </span><strong
          :style="{'color':(score >= 100.0 ? '#47DB47' :'red')}"
          class="Pershow-scores"
        >{{score}}</strong></p>
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
    score: {
      type: Number,
      default: 0
    }
    /*     rank: {
             type: Number,
             default: 0
         }*/
  }
}
</script>

<style>
.Pershow-Card {
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
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
}
.Pershow-scores {
  font-size: 22px;
}
</style>
