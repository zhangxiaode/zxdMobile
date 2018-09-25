<template>
  <div class="header">
    <router-link v-for="(item,index) in navList" :key="index" @click="changeNav(index)" :to="item.path">{{item.value}}</router-link>
  </div>
</template>

<script>
/**
 * 页面头部导航
 */
export default {
  name: 'layoutHeader',
  data () {
    return {
      navCurrent: 0,
      navList:[
        {
          path: "/homepage",
          value: "首页"
        },
        {
          path: "/travel",
          value: "旅游"
        },
        {
          path: "/synopsis",
          value: "简介"
        }
      ]
    }
  },
  methods: {
    changeNav(index) { // 导航跳转
      this.navCurrent = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  position:fixed;bottom:0;left:0;z-index:99;width:100%;height:1.02rem;
  display:flex;justify-content: space-around;align-items: center;
  border-top:solid 0.02rem #F5F5F5;
  box-sizing:border-box;
  a{
    height:1.02rem;line-height:1.02rem;
    color:#5A5A5A;font-size:0.32rem;
    flex:1;text-align:center;
    cursor:pointer;
    &.router-link-active{
      color:#222222;font-weight:bold;
      position:relative;
      &:after{
        position:absolute;left:50%;bottom:0;margin-left:-0.23rem;
        border-radius:0.03rem;background:#FF8C53;
        width:0.46rem;height:0.06rem;
        content:'';
      }
    }
  }
}
</style>
