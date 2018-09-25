<template>
  <div id="app">
    <Footer></Footer>
    <router-view></router-view>
  </div>
</template>

<script>
import Footer from '@/components/footer'
export default {
  name: 'App',
  components: { Footer },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less">
#app {
  position:relative;width:100%;height:100%;
  overflow-y: auto;overflow-x: hidden;
}
</style>
