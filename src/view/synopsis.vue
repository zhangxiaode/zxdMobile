<template>
  <div class="synopsis">
    <div class="scroll">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in bannerList" :key="index">
          <img :src="item.img" alt="">
          <p>{{item.text}}</p>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="synWrap">
      <div class="brief">
        <h2>黄新地</h2>
        <p>阿里巴巴都是看风景奥斯卡大姐夫速度快放假</p>
      </div>
      <div class="story">
        <p>马云，男，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市（原嵊县）谷来镇， 阿里巴巴集团主要创始人，现担任阿里巴巴集团董事局主席、日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事、联合国数字合作高级别小组联合主席。</p>
        <p>1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师，1995年创办中国第一家互联网商业信息发布网站“中国黄页”，1998年出任中国国际电子商务中心国富通信息技术发展有限公司总经理，1999年创办阿里巴巴，并担任阿里集团CEO、董事局主席。</p>
        <p>2013年5月10日，辞任阿里巴巴集团CEO，继续担任阿里集团董事局主席。 [3]  6月30日，马云当选全球互联网治理联盟理事会联合主席。 [4]  10月受邀出任英国首相戴维·卡梅伦的特别经济事务顾问。 [5]  2016年5月8日，马云任中国企业家俱乐部主席。</p>
        <p>2017年10月28日，马云在个人微博上公布了一张电影海报，并配以大有深意的“那一夜，那一梦”六个字，证实参演影片《功守道》。</p>
      </div>
      <ul class="info">
        <li>
          <span class="tit">性别</span>
          <span class="cont">男</span>
        </li>
        <li>
          <span class="tit">民族</span>
          <span class="cont">汉</span>
        </li>
        <li>
          <span class="tit">别名</span>
          <span class="cont">风清扬（阿里巴巴内部花名）</span>
        </li>
      </ul>
      <div class="experience">
        <div class="experItem">
          <div class="experHd">
            人物关系
          </div>
          <div class="experBd">
            <div class="relate">
              <div class="relateItem">
                <img :src="bannerList[0].img" alt="">
                <h3>大师傅</h3>
                <p>阿斯蒂芬</p>
              </div>
              <div class="relateItem">
                <img :src="bannerList[0].img" alt="">
                <h3>大师傅</h3>
                <p>阿斯蒂芬</p>
              </div>
              <div class="relateItem">
                <img :src="bannerList[0].img" alt="">
                <h3>大师傅</h3>
                <p>阿斯蒂芬</p>
              </div>
            </div>
          </div>
        </div>
        <div class="experItem">
          <div class="experHd">
            个人经历
          </div>
          <div class="experBd">
            <p>卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划</p>
            <div class="imgTxt">
              <img :src="bannerList[0].img" alt="">
              <p>阿喀琉斯大概卡死了结构化卡的世界观和卡上的规划</p>
            </div>
            <p>卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划卡的世界观和卡上的规划卡说过的话卡上的规划卡上的规划</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@/utils/index'
export default {
  name: 'synopsis',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        loop: false,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      },
      bannerList: [
        {
          img: require('../assets/banner1.jpg'),
          text: '埃里克森的话卡山东化工'
        },
        {
          img: require('../assets/banner2.jpg'),
          text: '淡饭黄齑说了肯定会'
        },
        {
          img: require('../assets/banner3.jpg'),
          text: '撒旦法管理会计哦位图看着你徐崭新崭新'
        },
        {
          img: require('../assets/banner4.jpg'),
          text: '爱上对方考虑你阿斯利康的'
        }
      ]
    }
  },
  computed: {
  },
  components: {},
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.synopsis{
  color:#ccc;font-size:0.36rem;line-height:0.6rem;
  .scroll{
    height:3rem;
    .swiper-container{
      height:100%;
    }
    .swiper-pagination{
      border-radius:0.02rem;overflow:hidden;width:auto;height:0.04rem;
      bottom:0.2rem;right:0.24rem;left:auto;
      transform: translateX(0);
      -webkit-transform: translateX(0);
    }
    .swiper-pagination-bullet{
      float:left;width:0.2rem;height:0.04rem;border-radius:0;
      margin:0;opacity:1;background:rgba(255,255,255,0.3);
    }
    .swiper-pagination-bullet-active{
      background:#fff;
    }
    img{
      height:100%;
    }
    p{
      position:absolute;bottom:0;left:0;z-index:1;width:100%;height:0.6rem;line-height:0.6rem;
      font-size:0.3rem;color:#eee;background:rgba(0,0,0,0.6);
      text-align:left;padding:0 0.2rem;
    }
  }
  .synWrap{
    padding:0 0.2rem;
    p{
      text-indent:2em;line-height:1.5;
      margin-bottom:0.3rem;
    }
  }
  .brief{
    border-bottom:solid 0.02rem #666;
    h2{
      font-size:0.48rem;font-weight:normal;color:#fff;
      line-height:1.1rem;
    }
    p{
      text-indent:0;margin-bottom:0.2rem;font-size:0.32rem;
    }
  }
  .story{
    padding:0.2rem 0;
  }
  .info{
    padding-bottom:0.1rem;
    li{
      line-height:1.5;overflow:hidden;
      span{
        float:left;
      }
      .tit{
        width:1.5rem;
      }
    }
  }
  .relate{
    border-top:solid 0.1rem #333;border-bottom:solid 0.1rem #333;
    margin:0 -0.2rem;padding:0.2rem 0;
    height:2.6rem;overflow:hidden;
    .relateItem{
      display:flex;flex-direction: column;justify-content: center;align-items:center;
      float:left;width:2rem;height:2.6rem;
      text-align:center;
      img{
        border-radius:0.8rem;background:#f00;
        width:1.6rem;height:1.6rem;
        overflow:hidden;
      }
      h3{
        font-size:0.28rem;font-weight:normal;
      }
      p{
        margin-bottom:0;text-indent:0;font-size:0.26rem;color:#888;
      }
    }
  }
  .experience{
    .experItem{
      .experHd{
        font-size:0.38rem;font-weight:normal;color:#fff;
        line-height:1.1rem;
      }
    }
  }
  .imgTxt{
    img{
      display:block;width:100%;height:3rem;
    }
    p{
      font-size:0.24rem;color:#666;text-align:center;text-indent:0;
      line-height:2.5;margin-bottom:0.2rem;
    }
  }
}
</style>
