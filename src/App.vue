<template>
  <div id="app">
    <!-- <a href="javascript:;" class="fullIcon" @click="toggleFullScreen"></a> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
    this.$ajax.get('/findUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$ajax.get('/addUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$ajax.get('/updateUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$ajax.get('/deleteUser', {}).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    // this.$ajax.post('/login2', {code: '001IVJEn1ng6sq0b06Fn1dQtEn1IVJEB'}).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    // this.$ajax.get('/login', {code: '001IVJEn1ng6sq0b06Fn1dQtEn1IVJEB'}).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
  },
  methods: {
    toggleFullScreen (e) {
      // var el = document.documentElement
      // var isFullscreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen
      // if (!isFullscreen) { // 进入全屏,多重短路表达式
      //   (el.requestFullscreen && el.requestFullscreen()) || (el.mozRequestFullScreen && el.mozRequestFullScreen()) || (el.webkitRequestFullscreen && el.webkitRequestFullscreen()) || (el.msRequestFullscreen && el.msRequestFullscreen())
      // } else { // 退出全屏,三目运算符
      //   document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : ''
      // }
    }
  }
}
</script>

<style lang="less">
#app {
  background:url(./assets/bodybg.jpg) repeat center center;
  position:relative;width:100%;height:100%;
  overflow-y: auto;overflow-x: hidden;
  .fullIcon{
    position:fixed;right:0.03rem;top:50%;width:1rem;height:1rem;
    background:rgba(0,0,0,0.2);border-radius:0.2rem;
    &:after{
      border-radius:0.3rem;background:rgba(255,255,255,0.2);
      display:block;width:0.6rem;height:0.6rem;
      margin:0.2rem;content:'';
    }
  }
}
</style>
