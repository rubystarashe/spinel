module.exports = {
  router: {
    base: '/spinel/'
  },
  head: {
    title: "Spinel for Skyrim Gameplay",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Spinel for Skyrim Gameplay" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { 
        async: true,
        src: 'https://www.youtube.com/iframe_api',
        onload: "(async function (en, ms) { while(!window.enabledYoutubeListeners) await new Promise(r => setTimeout(r, ms)); window.dispatchEvent(new Event(en)); })('event-youtube', 100);"
      }
    ]
  },
  loading: false,
  build: {
    vendor: [
      'babel-polyfill'
    ]
  },
  css: [
    'normalize.css/normalize.css'
  ],
  plugins: [
    { src: '~plugins/vue-custom-properties.js', ssr: false },
    { src: '~plugins/youtube-api.js', ssr: false }
  ]
}