<template>
  <div class="w-root">
    <div class="div-ul-root">
      <ul ref="ulL">
        <li v-for="(item, index) in listL" :key="index">
          <div
            class="content-root content-text-root"
            v-if="item.type === 'text'"
          >
            <div class="content-label">{{ item.title }}</div>
            <div class="content-text">{{ item.content }}</div>
          </div>
          <div
            class="content-root content-second"
            v-else-if="item.type === 'second'"
          >
            <div class="s-c-root"><img :src="item.childs[0].url" /></div>
            <div class="s-c-root"><img :src="item.childs[1].url" /></div>
          </div>
          <div class="content-root" v-else><img :src="item.url" /></div>
        </li>
      </ul>
    </div>
    <div class="div-ul-root">
      <ul ref="ulM">
        <li v-for="(item, index) in listM" :key="index">
          <div
            class="content-root content-text-root"
            v-if="item.type === 'text'"
          >
            <div class="content-label">{{ item.title }}</div>
            <div class="content-text">{{ item.content }}</div>
          </div>
          <div
            class="content-root content-second"
            v-else-if="item.type === 'second'"
          >
            <div class="s-c-root"><img :src="item.childs[0].url" /></div>
            <div class="s-c-root"><img :src="item.childs[1].url" /></div>
          </div>
          <div class="content-root" v-else><img :src="item.url" /></div>
        </li>
      </ul>
    </div>
    <div class="div-ul-root">
      <ul ref="ulR">
        <li v-for="(item, index) in listR" :key="index">
          <div
            class="content-root content-text-root"
            v-if="item.type === 'text'"
          >
            <div class="content-label">{{ item.title }}</div>
            <div class="content-text">{{ item.content }}</div>
          </div>
          <div
            class="content-root content-second"
            v-else-if="item.type === 'second'"
          >
            <div class="s-c-root"><img :src="item.childs[0].url" /></div>
            <div class="s-c-root"><img :src="item.childs[1].url" /></div>
          </div>
          <div class="content-root" v-else><img :src="item.url" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WaterFall',
  data() {
    return {
      listL: [],
      listM: [],
      listR: [],
      hasAddCount: 0,
      listALL: []
    }
  },
  props: {
    addList: Array,
    newList: Array
  },
  mounted() {
    this.updateView()
  },
  methods: {
    updateView() {
      let _this = this
      if (_this.hasAddCount >= _this.listALL.length) {
        return
      }
      let ulLHeight = _this.$refs.ulL.clientHeight
      console.log('ulLHeight', _this.$refs.ulL.offsetHeight)
      let ulMHeight = _this.$refs.ulM.clientHeight
      console.log('ulMHeight', _this.$refs.ulM.offsetHeight)
      let ulRHeight = _this.$refs.ulR.clientHeight
      console.log('ulRHeight', _this.$refs.ulR.offsetHeight)
      let zItem = _this.listALL[_this.hasAddCount]
      if (ulLHeight <= ulMHeight) {
        if (ulLHeight <= ulRHeight) {
          _this.listL.push(zItem)
        } else {
          _this.listR.push(zItem)
        }
      } else {
        if (ulMHeight <= ulRHeight) {
          _this.listM.push(zItem)
        } else {
          _this.listR.push(zItem)
        }
      }
      _this.hasAddCount++
      _this.$nextTick(function() {
        console.log('nextTick')
        setTimeout(() => {
          _this.updateView()
        }, 50)
      })
    }
  },
  created() {
    this.hasAddCount = 0
    this.listALL = this.newList
  },
  watch: {
    newList: function(newD) {
      this.hasAddCount = 0
      this.listALL = newD
      this.updateView()
    },
    addList: function(newD) {
      this.listALL = this.listALL.concat(newD)
      this.updateView()
    }
  }
}
</script>
<style lang="less" scoped>
.w-root {
  margin: 30px auto 0px auto;
  max-width: 1190px;
  display: flex;
  .div-ul-root {
    flex: 1;
    ul {
      font-size: 0px;
      li {
        width: 100%;
        .content-root {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .content-second {
          display: flex;
          .s-c-root {
            flex: 1;
            img {
              width: 100%;
            }
          }
        }
        .content-text-root {
          min-height: 120px;
          line-height: 40px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .content-label {
            font-size: 35px;
            color: #333;
            font-weight: 500;
          }
          .content-text {
            font-size: 25px;
            color: #999;
          }
        }
      }
      li:hover {
        .content-root {
        }
      }
    }
  }
}
</style>
