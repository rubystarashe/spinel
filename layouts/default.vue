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

<style>
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