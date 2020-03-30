<template>
  <div>
<!--    <div>-->
<!--      <Son :userList="userList"/>-->
<!--    </div>-->
    <div>
      <MyImage  v-for="item in data" v-bind:key="item.id" :imgaeNode="item"/>
    </div>
  </div>
</template>

<script>
import Son from '../Son'
import MyImage from './MyImage'

export default {
  name: 'Test',
  data () {
    return {
      userList: [
        {
          name: '张三',
          age: 19
        },
        {
          name: '李四',
          age: 20
        }],
      data: ''
    }
  },
  mounted () {
    var url = 'https://gank.io/api/v2/hot/views/category/Girl/count/20'
    this.$axios.get(url).then(res => {
      console.log(url)
      console.log(res.data)
      this.data = res.data.data
    })
  },
  // 组件标签映射
  components: {
    MyImage,
    Son
  }
}
</script>
