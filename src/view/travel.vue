<template>
  <div class="travel" @scroll="scrollTravel">
    <div class="photoItem" ref="travelPhoto" v-for="(item,index) in photoList" :key="index" @click="enlarge(item)">
      <img :src="item.dataSrc" alt="">
      <p>{{item.text}}</p>
    </div>
    <div class="dialogBg" v-if="showDialog"></div>
    <div class="imgActived" :style="{width:currentItem.width,height:currentItem.height}" @click="narrow">
      <div class="photoItem">
        <img :src="currentItem.img" alt="">
        <p>{{currentItem.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {} from '@/utils/index'
export default {
  name: 'travel',
  data () {
    return {
      photoList: [
        {
          img: require('../assets/photo1.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo2.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo3.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo4.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo5.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo6.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo7.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo8.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo9.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo10.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo12.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo13.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo14.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo15.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo16.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo17.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo18.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo19.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo20.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo21.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo22.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo23.jpg'),
          dataSrc: '',
          text: ''
        },
        {
          img: require('../assets/photo24.jpg'),
          dataSrc: '',
          text: ''
        }
      ],
      showDialog: false,
      currentItem: {
        img: '',
        text: '',
        width: '0',
        height: '0'
      }
    }
  },
  computed: {
  },
  components: {},
  mounted () {
    this.lazyload()
  },
  methods: {
    scrollTravel () {
      this.lazyload()
    },
    lazyload () {
      this.photoList.map((item, index) => {
        var seeHeight = document.documentElement.clientHeight
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (this.$refs.travelPhoto[index].offsetTop < seeHeight + scrollTop) {
          this.$nextTick(() => {
            item.dataSrc = item.img
          })
        }
      })
    },
    enlarge (item) {
      this.showDialog = true
      this.currentItem.img = item.img
      this.currentItem.text = item.text
      this.currentItem.width = '100%'
      this.currentItem.height = '100%'
    },
    narrow (currentItem) {
      this.currentItem.width = '0'
      this.currentItem.height = '0'
      setTimeout(() => {
        this.showDialog = false
      }, 500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.travel {
  // column-count: 3;column-gap: 0.2rem;
  box-sizing:border-box;overflow-x:hidden;overflow-y:scroll;
  padding: 0.2rem;
  height:100%;
  .photoItem {
    transition:all 0.5s;transform-origin: center center;transform:scale(1,1);
    margin: 0 0 0.2rem;
    img {
      width: 100%;height: auto;
    }
  }
  .dialogBg{
    position:fixed;left:0;top:0;z-index:2;width:100%;height:100%;
    background:rgba(0,0,0,0.7);
  }
  .imgActived {
    position:fixed;left:50%;top:50%;z-index:3;transform:translate(-50%,-50%);
    display:flex;justify-content: center;align-items: center;
    transition:all 0.5s;overflow:hidden;
    width:0;height:0;
  }
}
</style>
