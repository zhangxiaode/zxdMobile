<template>
  <div class="homepage">
    <div class="banner" v-for="(item,index) in bannerList" :key="index">
      <img :src="item.img" alt="">
      <p>{{item.text}}</p>
    </div>
  </div>
</template>

<script>
import {  } from '@/utils/index'
export default {
  name: 'homepage',
  data () {
    return {
      bannerList: [
        {
          img: require('../assets/banner1.jpg'),
          text: 'this is banner1'
        },
        {
          img: require('../assets/banner2.jpg'),
          text: 'this is banner2'
        },
        {
          img: require('../assets/banner3.jpg'),
          text: 'this is banner3'
        }
      ]
    }
  },
  computed: {
  },
  components: {  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.homepage{
  .banner{
    margin:0.2rem;border-radius:0.1rem;overflow:hidden;
    position:relative;
    img{
      width:100%;height:auto;
    }
    p{
      position:absolute;left:0;right:0;bottom:0;line-height:0.6rem;
      color:#fff;font-size:0.28rem;
      background:rgba(0,0,0,0.7);
      padding-left:0.3rem;
    }
  }
}
</style>
