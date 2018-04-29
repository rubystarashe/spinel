export const state = () => ({
  _youtube: false
})

export const getters = {
  youtube: state => state._youtube
}

export const mutations = {
  SET_YOUTUBE: (state, v) => state._youtube = v
}
