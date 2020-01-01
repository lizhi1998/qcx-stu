<template>
  <div class="home">
    <div class="home-home">
      <personal
        :name=" userOptions.name"
        :professional="userOptions.class"
        :score="userOptions.score"
      >
      </personal>
      <!--<van-button type="primary" @click="getUserInfo">更新分数</van-button>-->
      <h6 class="home-title">最新公告</h6>
      <Notice
        :title="Notice.title"
        :content="Notice.concent"
        :time="Notice.time"
      >
      </Notice>

      <h6 class="home-title">2019-2020学年上学期加减分详情</h6>
      <div class="home-tab">
        <van-tabs
          type="line"
          color="#4169e1"
          border="flase"
        >
          <van-tab title="全部记录">
            <ul>
              <li v-for="(k,item) in  scoreData">
                <hr class="line">
                <ScoreCard
                  :detailCategory="k.detailCategory"
                  :detailName="k.detailName"
                  :time="timestampFormat(new Date(k.createTime.replace(/-/g, '/')).getTime()/1000)"
                  :message="k.remarks"
                  :score="k.score"
                  @click.native="doshow(k.detailName,k.remarks,k.createTime)"
                >
                </ScoreCard>
              </li>
            </ul>
          </van-tab>
          <van-tab title="加分记录">
            <ul>
              <li v-for="(i,item) in  scoreAdd">
                <hr class="line">
                <ScoreCard
                  :detailCategory="i.detailCategory"
                  :detailName="i.detailName"
                  :time="timestampFormat(new Date(i.createTime.replace(/-/g, '/')).getTime()/1000)"
                  :message="i.remarks"
                  :score="i.score"
                  @click.native="doshow(i.detailName,i.remarks,i.createTime)"
                >
                </ScoreCard>
              </li>
            </ul>
          </van-tab>
          <van-tab title="减分记录">
            <ul>
              <li v-for="(j,item) in  scoreSub">
                <hr class="line">
                <ScoreCard
                  :detailCategory="j.detailCategory"
                  :detailName="j.detailName"
                  :time="timestampFormat(new Date(j.createTime.replace(/-/g, '/')).getTime()/1000)"
                  :message="j.remarks"
                  :score="j.score"
                  @click.native="doshow(j.detailName,j.remarks,j.createTime)"
                >
                </ScoreCard>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
        <p class="home-bottom">已全部加载~</p>
      </div>

      <!--<td>{{props.item.createTime}}</td>
			   <p>{{scoreData}}</p>
       <Scorecard
       :detailCategory=""
       :time=""
       :score="">
       </Scorecard>
              <td><v-btn @click="appealSubmit(props.item.teamCode, '')">申诉</v-btn></td>-->

    </div>
  </div>
</template>
<script>
import * as loggetApi from '../../api/account.js'
import { Dialog } from 'vant';
import { logger } from '../../util/util.js'
import Personal from '../../component/module/Personal.vue'
import Notice from '../../component/module/Notice.vue'
import ScoreCard from '../../component/module/ScoreCard.vue'

export default {
  components: {
    Personal,
    Notice,
    ScoreCard
  },
  data() {
    return {

      userOptions: {
        name: '',
        class: '',
        score: '',
        id: localStorage.getItem('login_account')
      },
      scoreData: [],
      scoreAdd: [],
      scoreSub: [],
      Notice: {
        title: '新学期已开启！',
        concent: '由于系统设计的原因会导致开启新学期时不会保留上学期的加减分记录，所以暂时无法查看上学期的文明分记录。有需要的话只能暂时询问辅导员了QAQ',
        time: '2019-09-18 08:00:00'
      }

    }
  },
  mounted() {
    this.getUserInfo()
    this.getScoreInfo()
  },
  methods: {
    getUserInfo: function () {
      const getstu = loggetApi.getStuInfo();
      getstu.then(res => {
        if (res.data !== undefined) {
          this.userOptions.name = res.data.stuName
          this.userOptions.class = res.data.stuClass
          this.userOptions.score = res.data.stuScore
          //  this.userOptions.id = res.data.stuId
        }
      })
    },
    getScoreInfo: function () {
      const getInfo = loggetApi.query(this.userOptions.id);

      getInfo.then(res => {
        // this.userOptions.score= res.status
        if (res.data !== undefined) {
          this.scoreData = res.data.filter(item => {
            return item.appeal === 'none' && item.cancel === '0'
          })

          this.scoreAdd = res.data.filter(item => {
            return item.appeal === 'none' && item.cancel === '0' && item.score >= '0.0'
          })
          this.scoreSub = res.data.filter(item => {
            return item.appeal === 'none' && item.cancel === '0' && item.score < '0.0'
          })
        }
      })
    },
    doshow: function (title, cont, times) {
      Dialog.alert({
        title: title,
        message: '备注：' + cont + '\n 操作时间：' + times
      }).then(() => {
        // on close
      }); 
},
    timeData: function () {
      var timedatas = '2019-01-01 00:00:00'.replace(/-/g, '/');

      var timedata = new Date(timedatas);
      return timedate;
    },
    timestampFormat: function (timestamp) {
      function zeroize(num) {
        return (String(num).length == 1 ? '0' : '') + num;
      }

      var curTimestamp = new Date().getTime() / 1000; // 当前时间戳

      var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

      var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
      var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

      var Y = tmDate.getFullYear(); var m = tmDate.getMonth() + 1; var d = tmDate.getDate();
      var H = tmDate.getHours(); var i = tmDate.getMinutes(); var s = tmDate.getSeconds();

      if (timestampDiff < 60) { // 一分钟以内
        return '刚刚';
      } else if (timestampDiff < 3600) { // 一小时前之内
        return Math.floor(timestampDiff / 60) + '分钟前';
      } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
        return Math.floor(timestampDiff / 3600) + '小时前';
      } else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
          return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if (curDate.getFullYear() == Y) {
          return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        } else {
          return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
      }
    }
    /*	ly:function(){
        this.$router.push('/student/suggest')
      }
    建议留言板*/
  }
}

</script>
<style >
.home {
  width: 100%;
  height: 100%;
  background-color: #f2f3f5;
}
.home-home {
  padding-top: 40px;
  width: auto;
  margin-top: 8px;
  margin-left: 2px;
  margin-right: 2px;
  font-size: 25px;
}
.home-title {
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 0;
  margin-right: 0;
  padding-top: 5px;
  padding-bottom: 0;
  color: #969799;
}
.home-bottom {
  text-align: center;
  padding-bottom: 50px;
  font-size: 10px;
}
.home-tab {
  margin-top: 10px;
  position: sticky;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}
.line {
  width: 50%;
  border: 1px solid #f2f3f5;
  background-color: #00bdea;
}
</style>

