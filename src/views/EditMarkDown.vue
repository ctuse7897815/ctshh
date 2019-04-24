<template>
  <div class="mk-root">
    <mavon-editor v-model="value" style="height:500px;"/>
  </div>
</template>
<script>
export default {
  name: 'EditMarkdown',
  data() {
    return {
      value: ''
    }
  }
}
</script>
<style lang="less" scoped>
.mk-root {
  padding: 100px 300px;
}
</style>
