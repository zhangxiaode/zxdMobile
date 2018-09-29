<template>
  <div class="layout">
    <Header></Header>
    <div class="layoutWrap">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  name: 'layout',
  data () {
    return {
    }
  },
  computed: {
  },
  components: { Header },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.layout{
  position:relative;height:100%;
}
.layoutWrap{
  position:absolute;top:1.02rem;bottom:0;left:0;right:0;
  overflow-x:hidden;overflow-y:auto;
}
</style>
