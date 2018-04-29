import Vue from 'vue'

export default ({ app, store, route, error, redirect }) => {
  window.addEventListener('event-youtube', async () => {
    while (!YT) {
      await new Promise(r => setTimeout(r, 100))
    }
    Vue.prototype.$YT = YT
    store.commit('init/SET_YOUTUBE', true)
  })
  window.enabledYoutubeListeners = true
}
