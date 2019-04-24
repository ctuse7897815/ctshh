<template>
  <div class="tab-nav-root">
    <div class="tab-bg">
      <ul>
        <li v-for="(item, index) in tabsArray" :key="index">
          <span>{{ item.name }}</span>
          <router-link :to="{ name: item.url }">
            <img :src="item.imgPath" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabNav',
  props: {
    tabsArray: Array
  }
}
</script>
<style lang="less" scoped>
.tab-nav-root {
  width: 100%;
  height: 100%;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  .tab-bg {
    min-width: 600px;
    margin-top: 40px;
    line-height: 25px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px 10px 0 0;
    ul {
      margin-top: 10px;
      li {
        list-style-type: none;
        display: inline-block;
        position: relative;
        margin-right: 20px;
        span {
          display: none;
          position: absolute;
          bottom: 85px;
          left: 0;
          width: 100%;
          background-color: #222;
          padding: 4px 0;
          border-radius: 7px;
          line-height: 20px;
        }
        img {
          width: 55px;
          height: 55px;
          -webkit-box-reflect: below 2px -webkit-gradient(linear, left top, left
                bottom, from(transparent), color-stop(0.7, transparent), to(rgba(255, 255, 255, 0.5)));
          -webkit-transition: all 0.3s;
          -webkit-transform-origin: 20% 70%;
        }
        a:-webkit-any-link {
          color: -webkit-link;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      li:hover {
        span {
          display: block;
          color: #fff;
        }
        img {
          -webkit-transform: scale(1.5);
          margin: 0 2em;
        }
      }
    }
  }
}
</style>
