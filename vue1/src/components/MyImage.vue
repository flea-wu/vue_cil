<template>
    <div class="myImage">
      <img class="myImageCss" :src="imgaeNode.url">
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
    height: 100%;
  }
</style>
