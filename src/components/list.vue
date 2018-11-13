<template>
    <div class="list">
      <ul>
        <li v-for="(item, index) in list" v-bind:key="index">
          <div class="text">
            <p class="name">姓名：<span>{{item.name}}</span></p>
            <p class="phone">电话：<span>{{item.phone}}</span></p>
          </div>
          <p class="company">公司：<span>{{item.company}}</span></p>
          <p class="address">地址：<span>{{item.province}}-{{item.city}}-{{item.district}}</span></p>
        </li>
        <!-- <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li>
        <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li>
        <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li>
        <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li>
        <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li>
        <li>
          <div class="text">
            <p class="name">姓名：<span>王其</span></p>
            <p class="phone">电话：<span>18256907916</span></p>
          </div>
          <p class="company">公司：<span>北京一点网聚科技有限公司</span></p>
          <p class="address">地址：<span>启阳路中轻大厦A座</span></p>
        </li> -->
      </ul>
      <div class="submit" @click="submit">筛选</div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        list: []
      }
    },
    props: {
      timeS: {
        type: String,
        default: ''
      },
      timeE: {
        type: String,
        default: ''
      },
    },
    mounted: function() {
      this.show();
    },
    methods: {
      show (startTime, endTime) {
        var _that = this;
        let params = {
          'startTime': startTime,
          'endTIme': endTime
        }

        this.$http.get('https://top.yidianzixun.com/applet/clue', {params})
        .then(this.getDataList)
      },
      getDataList (res) {
        this.list = res.data.data
      },
      submit: function () {
        this.show(this.timeS, this.timeE);
      }
    }
  }
</script>
<style lang="less" scoped>
    .list{
      margin-top: 60px;
      ul {
        padding-inline-start: 0;
        padding:0 20px;
        list-style: none;
        li{
            border: 1px solid #11caff;
            padding:10px;
            border-radius: 5px;
            margin-bottom:8px;
          .text{
              width:100%;
              p{
                  width:50%;
                  display: inline-block;
                  color:#999;
                  span{
                      color:#000;
                  }
              }
          }
          p.company{
            color:#999;
            padding-top:10px;
            span{
                color:#000;
            }
          }
          p.address{
            color:#999;
            padding-top:10px;
            span{
                color:#000;
            }
          }
        }
      }
      .submit{
        position:fixed;
        right:2px;
        bottom:2px;
        padding:5px 15px;
        background:#11caff;
        font-size:16px;
        color:#fff;
        border-radius: 5px;
      }
    }
</style>