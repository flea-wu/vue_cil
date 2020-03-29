<template>
  <div class="Test">
    <div>
      {{ msg }}
      <Son :userList="userList"/>
    </div>
    <div>
      <div v-for="item in data" v-bind:key="item.id">
        {{ item.node.avatar_large }}
        {{ item.node.name }}
        {{ item.node.avatar_large }}
      </div>
    </div>
  </div>
</template>

<script>
import Son from '../Son'

export default {
  name: 'Test',
  data () {
    return {
      msg: 'hello',
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
    var url = 'https://www.v2ex.com/api/topics/hot.json'
    this.$axios.get(url).then(res => {
      console.log(url)
      console.log(res.data)
      this.data = res.data
    })
  },
  // 组件标签映射
  components: {
    Son
  }
}
</script>
