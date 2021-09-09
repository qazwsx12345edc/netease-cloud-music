import { createStore } from 'vuex'
import persistedState from 'vuex-persistedstate'

const store = createStore({
  state: {
    songURL: "",
    songImg: "",
    songName: ""
  },
  getters: {
  },
  mutations: {
    set_song_url(state, url) {
      state.songURL = url
    },

    set_song_img(state, img) {
      state.songImg = img
    },

    set_song_name(state, name) {
      state.songName = name
    }
  },
  actions: {

  },
  plugins: [persistedState()]
})


export default store