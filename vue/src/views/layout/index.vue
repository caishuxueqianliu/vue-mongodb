<template>
    <div id="index">
            <button @click="test1()">1</button>
      <button @click="test2()">2</button>
      <div class="header">
        <img src="/api1/images/Icon1024x1024.png" alt="">
        <div class="title">
          <span class="p1">放置海岛2</span>
          <span class="p2">南京雪糕网络科技有限公司1</span>
          <div class="get">
            <a href="/api1/images/udidSign.mobileconfig" download="/api1/images/udidSign.mobileconfig">
              <van-button class='btn3' type="info" size="small">获取</van-button>
            </a>
           <span class="sizeText">App内购买</span>
          </div>
        </div>
      </div>
      <div class="rate">
        <div class="span">
       <div> <span class="rateNum">4.6</span><van-rate :value="value" allow-half disabled/></div>
        <span>2222份评分</span>
        </div>
        <div class="span">
          <span class="rateNum">#1</span>
            <span>策略卡牌</span>
        </div>
        <div class="span">
          <span class="rateNum">9+</span>
          <span>年龄</span>
        </div>
      </div>
      <div class="swipe">
        <van-swipe @change="onChange" ref="swipe" :width="240" class="item" loop >
          <van-swipe-item class="item" v-for="(image, index) in images" :key="index"   >
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="desc">
        <hr class="hr">
        <span>
          文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍 文字介绍
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      // images: ["../../../static/Icon1024x1024.png", "../../../static/LaunchScreen.png", "../../../static/LaunchScreen.png"]
      images: [
        '/api1/images/1.jpg',
        '/api1/images/2.jpg',
        '/api1/images/3.jpg',
        '/api1/images/4.jpg',
        '/api1/images/5.jpg'
      ],
      query: this.$route.query,
      aa: {}
    // "data": {
    //   "attributes": {
    //     "name": "xuting1adhoc",
    //     "platform": "IOS",
    //     "udid": "cd76d7e736b2053e22c17d031de7fed6e1daa529"
    //   },
    //   "type": "devices"
    // }
    }
  },
  created () {
    var a = this.$route.query.a
    console.log(a)
  },
  mounted () {
  },
  methods: {
    onChange (index) {
      // this.$refs.swipe.next()
    //  console.log(index)
    },
    test1 () {
      window.location.href = "http://localhost:8080?a=1&b=2"
    },
    test2 () {
      window.open("http://localhost:8080")
    }
  },
  components: {},
  watch: {
  },
  computed: {
    value () {
      return 4.5
    }
  },
  props: {}
}
</script>
<style lang="less" scoped>
  #index{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    .header{
      margin-top:1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-content: center;
      img{
        width:6rem;
        height: 6rem;
        margin-left: 1rem;
        margin-right: 1rem;
      }
      .title{
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        .p1{
          font-family: KaiTi;
          font-weight: bold;
          font-size: 1.5rem;
        }
        .p2{
          color:#8a8a8d;
        }
        .get{
          margin-top: 10px;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          .btn3{
            width: 70px;
            height: 26px;
            border-radius: 15px;
            font-size: 16px;
            font-weight: bold;
            margin-right: 10px;
          }
          .sizeText{
            font-size: 10px;
            color:#8a8a8d;
          }
        }
      }
    }
    .rate{
      color:#8a8a8d;
      margin-top: 10px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      align-items: center;
      .span{
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
      }
      .rateNum{
        font-size: 1.5rem;
        font-weight: bold;
      }
    }
    .swipe{
      margin-top: 10px;
      .item{
        display: flex;
        flex-direction: row;
       justify-content: center;
        justify-items: center;
        img{
          //justify-self: center;
          height: 24rem;
          width: 18rem;
          margin-left: 1rem;
          margin-right: .5rem;
        }
      }
    }
    .desc{
      margin-top: 10px;
      .hr{
     margin: 1.5rem 1rem 1.5rem 1rem;
      }
    }
  }
</style>
