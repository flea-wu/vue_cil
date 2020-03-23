<template>
  <div class="Test">
    <div>
      {{ msg }}
      <Son :userList="userList"/>
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
        }]
    }
  },
  // 组件标签映射
  components: {
    Son
  }
}
</script>
