<template>
  <div id="app">
    <LayoutByMac>
      <div slot="layBody" class="layBody"><router-view /></div>
      <div slot="layFooter" class="layFooter"><TabNav :tabsArray="tabs" /></div>
    </LayoutByMac>
  </div>
</template>
<script>
import LayoutByMac from '@/components/LayoutByMac'
import TabNav from '@/components/TabNav'
import iHome from '@/assets/home.png'
import iMusic from '@/assets/music.png'
import iEdit from '@/assets/edit.png'
import iFly from '@/assets/fly.png'
import iMagic from '@/assets/magic.png'
import iSetting from '@/assets/setting.png'
export default {
  name: 'APP',
  components: {
    LayoutByMac,
    TabNav
  },
  data() {
    return {
      tabs: [
        {
          name: '首页',
          url: 'home',
          imgPath: iHome
        },
        {
          name: '听听歌',
          url: 'about',
          imgPath: iMusic
        },
        {
          name: '写写-MarkDown',
          url: 'EditMarkdown',
          imgPath: iEdit
        },
        {
          name: 'I Can Fly',
          url: 'home',
          imgPath: iFly
        },
        {
          name: 'Magic',
          url: 'home',
          imgPath: iMagic
        },
        {
          name: '设置(并没卵用)',
          url: 'home',
          imgPath: iSetting
        }
      ]
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('~@/assets/KjyvQ6I.jpg') no-repeat;
  background-size: 100%;
  .layBody {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .layFooter {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
