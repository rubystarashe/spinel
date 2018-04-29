<template>
<div>
  <div id="first_loading_area">
    <transition name="flip" mode="out-in">
    <div v-if="frame == 0" id="first_loading_0" key="0">
      <div id="first_loading_border">
        <div class="border top"/>
        <div class="border bottom"/>
        <div class="border left"/>
        <div class="border right"/>
      </div>
      <img src="/skyrim_logo.png" id="first_loading_skyrim_logo">
    </div>
    <div v-if="frame == 1" id="first_loading_1" key="1">
      <div id="first_loading_1_text">
        Spinel
      </div>
    </div>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      frame: 0
    }
  },
  async mounted() {
    await new Promise(r => setTimeout(r, 5000))
    this.frame = 1
    await new Promise(r => setTimeout(r, 5000))
    this.frame = 2
    this.$emit('onload')
  }
}
</script>

<style lang="scss" scoped>
@font-face{
    font-family: 'Angel';
    src: url(/angel.otf) format('truetype')
}

#first_loading_area {
  #first_loading_0, #first_loading_1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 60vh;
    height: 30vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    #first_loading_border {
      .border {
        position: absolute;
        background: rgb(146, 146, 146);
      }
      .top, .bottom {
        height: 0.2vh;
        animation: tb 0.5s forwards linear;
        animation-delay: 1s;
        @keyframes tb {
          0% {width: 0}
          100% {width: calc(100% + 0.4vh)}
        }
      }
      .left, .right {
        width: 0.2vh;
        animation: lr 1s forwards;
        animation-delay: 1.5s;
        @keyframes lr {
          0% {height: 0}
          100% {height: calc(100% + 0.4vh)}
        }
      }
      .top {
        top: -0.2vh;
        left: -0.2vh;
      }
      .bottom {
        bottom: -0.2vh;
        right: -0.2vh;
      }
      .left {
        left: -0.2vh;
        bottom: -0.2vh;
      }
      .right {
        right: -0.2vh;
        top: -0.2vh;
      }
    }
    #first_loading_skyrim_logo {
      width: 80%;
      opacity: 0;
      animation: text 1s forwards;
      animation-delay: 2s;
      @keyframes text {
        0% {
          filter: blur(20px);
          opacity: 0
        }
        100% {
          filter: none;
          opacity: 1
        }
      }
    }
  }
  #first_loading_1 {
    border: 0.2vh solid white;
    #first_loading_1_text {
      font-family: Angel;
      font-size: 30vh;
      text-align: center;
      transform: translate(-3vh, -2vh);
      text-shadow: 2px 2px black;
    }
  }
}

.flip-enter-active, .flip-leave-active {
  transition: all 0.5s;
}
.flip-enter, .flip-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scaleY(0);
}
</style>