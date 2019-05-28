<template>
<div id="index_area">
  <bg-video id="bg_video" ref="bg_video"
    @onload="video_load = true"
    @onpause="video_paused"
  />
  <snow class="snow" ref="bg_snow" :type="'back'" :count="80"/>
  <first-loading id="first_loading_area"
    @onload="video_play"
  />
  <terms v-if="video_done"/>
  <snow class="snow front" ref="bg_snow_front" :type="'front'" :count="20"/>
</div>
</template>

<script>
import snow from '~/components/snow'
import bgVideo from '~/components/bgVideo'
import firstLoading from '~/components/firstLoading'
import terms from '~/components/terms'

export default {
  components: {
    snow,
    bgVideo,
    firstLoading,
    terms
  },
  data() {
    return {
      video_load: false,
      video_done: false
    }
  },
  methods: {
    video_play() {
      this.$refs.bg_snow.blur()
      this.$refs.bg_snow_front.blur()
      if(this.$device.isDesktop) this.$refs.bg_video.play()
      else this.video_paused()
    },
    video_paused() {
      this.$refs.bg_video.blur()
      this.$refs.bg_snow.blur()
      this.$refs.bg_snow_front.blur()
      this.video_done = true
    }
  }
}
</script>

<style lang="scss">
#index_area{
  width: 100%;
  height: 100%;
  background: black;
  overflow: hidden;
  .snow, #bg_video, #first_loading_area {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
  }
}
</style>