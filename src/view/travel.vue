<template>
  <div class="travel">
    <div class="photoItem" v-for="(item,index) in photoList" :key="index" @click="enlarge(item)">
      <img :src="item.img" alt="">
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
          text: ''
        },
        {
          img: require('../assets/photo2.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo3.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo4.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo5.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo6.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo7.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo8.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo9.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo10.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo12.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo13.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo14.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo15.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo16.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo17.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo18.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo19.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo20.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo21.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo22.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo23.jpg'),
          text: ''
        },
        {
          img: require('../assets/photo24.jpg'),
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
  },
  methods: {
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
  column-count: 3;column-gap: 0.2rem;
  padding: 0.2rem;
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
