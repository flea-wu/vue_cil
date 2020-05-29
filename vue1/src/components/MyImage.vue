<template>
<!--    <div class="myImage">-->
<!--      <img class="myImageCss" :src="imgaeNode.url">-->
<!--    </div>-->
    <div class="demo-block">
      <div class="source">
        <div class="demo-image__lazy">
          <el-image class="myImageCss" v-for="url in imgaeNode" :key="url" :src="url" lazy/>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'myImage',
  props: [
    'imgaeNode'
  ]
}
</script>

<style scoped>
  .myImage {
    width: 265px;
    height: 360px;
    border-radius: 3px;
    padding: .55rem .55rem 0;
    justify-content: center;
    display: inline-block;
    cursor: pointer;
    margin: 0;
  }
  .myImageCss {
    width: 100%;
    height: 360px;
    display: inline-block;
  }
  .demo-block {
    margin-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    display: block;
  }
  .source {
    display: block;
    padding: 24px;
  }
  .demo-image__lazy {
    height: 560px;
    overflow-y: auto;
    text-align: center;
  }
</style>
