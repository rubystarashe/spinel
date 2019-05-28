<template>
<div>
  <div id="video"></div>
  <div id="video_curtain"></div>
</div>
</template>

<script>
export default {
  data() {
    return {
      video: null,
      time: 0,
      volume: 7,
      timer: null,
      p_blur: false,
      start: 35,
      end: 61
    }
  },
  watch: {
    time: async function(v) {
      if(v > this.end - 1 && this.volume > 0) {
        this.video.setVolume(this.volume)
        this.volume -= 0.3
      }
      if(v > this.end) {
        window.clearInterval(this.timer)
        this.video.pauseVideo()
        this.$emit('onpause')
      }
    }
  },
  mounted() {
    this.video = new this.$YT.Player('video', {
      width: 1600,
      height: 900,
      videoId: 'znj_r4YNbqE'
    })
    const onload_interval = setInterval(() => {
      try {
        if(this.video.getPlayerState()) {
          this.$emit('onload')
          clearInterval(onload_interval)
        }
      } catch(e) {
        // not loaded
      }
    }, 50)
  },
  methods: {
    play() {
      this.timer = window.setInterval(() => {
        this.time = this.video.getCurrentTime()
      }, 50)
      this.video.seekTo(this.start)
      this.video.setVolume(this.volume)
      this.video.playVideo()
    },
    blur() {
      this.p_blur = !this.p_blur
    }
  },
  customProperties: {
    '--video_curtain_opacity'() {
      if(this.time > this.start + 0.1) return 0
      else return 1
    },
    '--video_blur'() {
      if(this.p_blur) return '10px'
      else if(this.time > this.start + 0.1) return 'none'
      else return '100px'
    }
  }
}
</script>

<style lang="scss">
#video {
  position: absolute;
  min-width: 150%;
  min-height: 200%;
  width: auto;
  height: auto;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  filter: blur(var(--video_blur));
  transition: all 1s;
  overflow: hidden;
  background: black;
}
#video_curtain {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: black;
  transition: all 1s;
  opacity: var(--video_curtain_opacity);
}
</style>