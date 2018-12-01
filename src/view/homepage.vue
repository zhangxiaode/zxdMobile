<template>
  <div class="homepage">
    <div class="banner" @click="$router.push('/article')">
      <img :src="banner.img" alt="">
      <p>{{banner.text}}</p>
    </div>
  </div>
</template>

<script>
import {} from '@/utils/index'
export default {
  name: 'homepage',
  data () {
    return {
      banner: {
        img: require('../assets/banner1.jpg'),
        text: 'this is banner1'
      }
    }
  },
  computed: {},
  components: {},
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.homepage {
  .banner {
    margin-bottom: 0.2rem;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    p {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: 0.6rem;
      color: #fff;
      font-size: 0.28rem;
      background: rgba(0, 0, 0, 0.7);
      padding-left: 0.3rem;
    }
  }
}
</style>
