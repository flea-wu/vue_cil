<template>
  <div>
    <div>
      <CountDown/>
    </div>
    <div>
      <MyImage :imgaeNode="data"/>
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
    if (window.console) {
      console.log('想和我们共同打造世界最大中文互动问答平台吗？\n想让自己的成就在亿万用户面前展现吗？想让世界看得你的光芒吗？\n加入我们，在这里不仅是工作，投入你的时间和热情，滴滴汗水终会汇聚成不平凡的成果。\n期待你的加盟。')
      console.log('公司诚聘前端工程师，%c简历投递地址http://www.badu.toudi.com', 'color:blue;font-weight:bold;')
      console.log('请在邮件中注明%c来自:console', 'color:red;font-weight:bold;')
    }
    this.data = [
      'https://img.nbjike.com/jietu/20200411222209.png',
      'https://img.nbjike.com/jietu/20200411222224.png',
      'https://img.nbjike.com/jietu/20200411222233.png',
      'https://img.nbjike.com/jietu/20200411222252.png',
      'https://img.nbjike.com/jietu/20200411222308.png',
      'https://img.nbjike.com/jietu/20200411222323.png',
      'https://img.nbjike.com/jietu/20200411222333.png',
      'https://img.nbjike.com/jietu/20200411222345.png',
      'https://img.nbjike.com/jietu/20200411222406.png',
      'https://img.nbjike.com/jietu/20200411222420.png',
      'https://img.nbjike.com/jietu/20200411222441.png',
      'https://img.nbjike.com/jietu/20200411222457.png',
      'https://img.nbjike.com/jietu/20200411222511.png',
      'https://img.nbjike.com/jietu/20200411222524.png',
      'https://img.nbjike.com/jietu/20200411222535.png',
      'https://img.nbjike.com/jietu/20200411222546.png',
      'https://img.nbjike.com/jietu/20200411222555.png',
      'https://img.nbjike.com/jietu/20200411222603.png',
      'https://img.nbjike.com/jietu/20200411222620.png',
      'https://img.nbjike.com/jietu/20200411222633.png'
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
