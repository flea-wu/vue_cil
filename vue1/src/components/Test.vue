<template>
  <div>
<!--    <div>-->
<!--      <Son :userList="userList"/>-->
<!--    </div>-->
    <div>
      <CountDown/>
    </div>
    <div>
      <MyImage  v-for="item in data" v-bind:key="item.id" :imgaeNode="item"/>
    </div>
    <div>
      <BeiAn/>
    </div>
  </div>
</template>

<script>
import Son from './Son'
import MyImage from './MyImage'
import BeiAn from './BeiAn'
import CountDown from './CountDown'

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
    // var url = 'https://gank.io/api/v2/hot/views/category/Girl/count/20'
    // this.$axios.get(url).then(res => {
    //   console.log(url)
    //   console.log(res.data)
    //   this.data = res.data.data
    // })
    this.data = [
      {
        url: 'https://img.nbjike.com/jietu/20200411222209.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222224.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222233.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222252.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222308.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222323.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222333.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222345.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222406.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222420.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222441.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222457.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222511.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222524.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222535.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222546.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222555.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222603.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222620.png'
      },
      {
        url: 'https://img.nbjike.com/jietu/20200411222633.png'
      }
    ]
  },
  // 组件标签映射
  components: {
    MyImage,
    Son,
    BeiAn,
    CountDown
  }
}
</script>
