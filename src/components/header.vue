<template>
  <div class="header">
    <router-link v-for="(item,index) in navList" :key="index" @click="changeNav(index)" :to="item.path">
      <span><i class="icon iconfont" v-html="item.icon"></i>{{item.value}}</span>
    </router-link>
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
      navList: [
        {
          path: '/layout/homepage',
          icon: '&#xe6cb;',
          value: '首页'
        },
        {
          path: '/layout/travel',
          icon: '&#xe67f;',
          value: '旅游'
        },
        {
          path: '/layout/synopsis',
          icon: '&#xe657;',
          value: '简介'
        }
      ]
    }
  },
  methods: {
    changeNav (index) {
      // 导航跳转
      this.navCurrent = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  position: absolute;top: 0;left: 0;z-index: 99;width: 100%;height: 1.02rem;
  display: flex;justify-content: space-around;align-items: center;
  border-top: solid 0.02rem #666;background: rgba(0, 0, 0, 1);
  box-sizing: border-box;overflow: hidden;
  a {
    color: #fff;font-size: 0.32rem;text-align: center;
    height: 1.02rem;line-height: 1.02rem;
    flex: 1;
    i {
      margin-right: 0.05rem;
    }
    &.router-link-active {
      color: #ff852a;
    }
  }
}
</style>
