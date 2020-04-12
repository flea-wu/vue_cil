<template>
  <div class="countDown-wapper">
    <p>{{ time }}</p>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  data () {
    return {
      time: '',
      timeClock: ''
    }
  },
  mounted () {
    this.timeClock = setInterval(() => {
      this.timeDown()
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timeClock)
  },
  methods: {
    timeDown () {
      const startTime = new Date('2019-7-12')
      const nowTime = new Date()
      let leftTime = parseInt((nowTime.getTime() - startTime.getTime()) / 1000)
      let d = parseInt(leftTime / (24 * 60 * 60))
      let h = this.formate(parseInt(leftTime / (60 * 60) % 24))
      let m = this.formate(parseInt(leftTime / 60 % 60))
      let s = this.formate(parseInt(leftTime % 60))
      if (leftTime <= 0) {
        return
      }
      this.time = `JIKE 离开 ${d} 天 ${h} 小时 ${m} 分 ${s} 秒 `
    },
    formate (time) {
      if (time >= 10) {
        return time
      } else {
        return `0${time}`
      }
    }
  }
}
</script>

<style scoped>
.countDown-wapper {
  width: 100%;
  height: 30px;
  text-align: center;
}
</style>
