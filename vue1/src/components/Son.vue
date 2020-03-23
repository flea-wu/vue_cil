<template>
  <div>
    <div v-for="(user,index) in userList" :key="index">
      <label>姓名：{{user.name}}</label>
      <label>年龄：{{user.age}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Son',
  // 声明接收组件
  props: [
    'userList'
  ]
}
</script>

<style scoped>

</style>
