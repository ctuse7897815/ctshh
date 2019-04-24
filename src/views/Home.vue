<template>
  <div class="home"><WaterFall :addList="addList" :newList="newList" /></div>
</template>

<script>
// @ is an alias to /src
import WaterFall from '@/components/waterfall/WaterFall.vue'
// [
//   {
//     url: 'http://www.ctshh.cn/imgs_source/DSC00463.JPG',
//     title: '在哪遥远的地方',
//     content: '出远门而学人文',
//     menu: '',
//     type: 'text'
//   },
//   {
//     url: 'http://www.ctshh.cn/imgs_source/DSC00463.JPG',
//     title: '',
//     content: '',
//     menu: '',
//     type: ''
//   },
//   {
//     title: '',
//     content: '',
//     menu: '',
//     type: 'second',
//     childs: [
//       {
//         url: 'http://www.ctshh.cn/imgs_source/DSC00476.JPG'
//       },
//       {
//         url: 'http://www.ctshh.cn/imgs_source/DSC01241.JPG'
//       }
//     ]
//   }
// ]
export default {
  name: 'home',
  data() {
    return {
      addList: [],
      newList: []
    }
  },
  mounted() {
    const _that = this
    _that.$http.querBarCode({}).then(qbc => {
      console.log('qbc', qbc)
      if (qbc.code && qbc.data && qbc.data.list && qbc.data.list.length > 0) {
        const vData = qbc.data.list
        const vlist = []
        vData.map(vItem => {
          vlist.push({
            type: vItem.type,
            title: vItem.title,
            content: vItem.content,
            menu: '',
            url: _that.$conf.PIC_PATH + vItem.url_thum,
            mUrl: _that.$conf.PIC_PATH + vItem.url
          })
        })
        console.log(vlist)
        _that.newList = vlist
      }
    })
  },
  components: {
    WaterFall
  }
}
</script>
