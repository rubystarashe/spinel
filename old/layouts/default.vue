<template>
<div>
  <div id="loading" v-if="!youtube"><img src="/spinel/discord.png">loading</div>
  <nuxt v-if="youtube"/>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      youtube: 'init/youtube'
    })
  }
}
</script>

<style lang="scss" scoped>
@import url('//fonts.googleapis.com/earlyaccess/nanumgothic.css');

html {
  font-family : 'Nanum Gothic';
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  * {
    outline: none;
    text-decoration: none;
  }
  * {
    user-select: none;
  }
}
body {
  background: black;
}
#loading {
  font-family: Angel;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>