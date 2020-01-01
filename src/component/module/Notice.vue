<template>
  <div>
    <div class="Notice-Card">
      <h3 class="Notice-title">{{title}}</h3>
      <p class="Notice-content">{{content}}<br>
        <p style="text-indent:2em; ">PS：以后会增加关于新学期的功能</p>
      </p>
      <!--<div class="Notice-more"><span >&nbsp;{{clike}}</span></div> -->
      <p class="Notice-time">
        <router-link to="/student/join">--->加入我们<---</router-link> <br><br>
            <router-link to="/student/suggest">--->点这里提出意见建议<---</router-link>
                </p>
                </div>
                </div>
                </template>

<script>

export default {

  props: {
    editable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    conurl: {
      type: String,
      default: '#'
    },
    clike: {
      type: String,
      default: ''
    }

  }

}
</script>

<style>
.Notice-Card {
  padding: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  font-size: 13px;
  border-radius: 5px;
  background-image: url(../../../public/img/gonggao.png);
  background-size: 100% 100%;
  display: block;
}
.Notice-more {
  text-align: right;
  margin-right: 15px;
}
.Notice-time {
  text-align: right;
  margin-right: 15px;
  margin-top: 40px;
}
.Notice-content {
  margin-left: 15px;
  text-indent: 2em;
  text-align: left;
}
.Notice-title {
  margin-left: 15px;
  font-size: 18px;
}
</style>
