<template>
<div>
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
</style>