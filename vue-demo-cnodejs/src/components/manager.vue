<template>
  <div class="time-line">
    <Timeline>
      <TimelineItem>
        <p class="time">2017/3---至今</p>
        <router-link :to="tag" class="content">中软国际有限公司<br><br></router-link>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2015/5--2017/1</p>
        <router-link :to="tag" class="content">济南帷幕信息有限公司<br><br></router-link>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2014/8--2015/5</p>
        <router-link :to="tag" class="content">闭关修炼中····<br><br></router-link>
      </TimelineItem>
      <TimelineItem>
        <p class="time">2010/9--2014/7</p>
        <router-link :to="tag" class="content">西安理工大学<br><br></router-link>
      </TimelineItem>
      <TimelineItem>
        <p class="time">Once upon a time--2010/7</p>
        <router-link :to="tag" class="content">岁月匆匆，俱成往事<br><br></router-link>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tag: '/',
      allDatas: []
    }
  }
}
</script>

<style scoped lang="scss">
#app {
  display: block;
  text-align: right;
}

.time-line{
  position: absolute;
  top: 60px;
  left: 100px;
}

.time {
  font-size: 20px;
  font-weight: bold;
  color: #ddd;
}

.content {
  padding-left: 5px;
  font-size: 18px;
  color: #888;
}
</style>
