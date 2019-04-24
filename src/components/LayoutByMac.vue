<template>
  <div class="lay-root">
    <div class="lay-body"><slot name="layBody" /></div>
    <div class="lay-footer"><slot name="layFooter" /></div>
  </div>
</template>
<style lang="less" scoped>
.lay-root {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .lay-body {
    position: absolute;
    left: 0;
    top: 0;
    right: -18px;
    bottom: 130px;
    overflow: hidden;
  }
  .lay-footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 130px;
    overflow: hidden;
  }
}
</style>
