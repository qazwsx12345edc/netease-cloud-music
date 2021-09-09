<template>
  <router-view />
  <MusicPlayer v-if="hasSrc" />
</template>

<script>
import MusicPlayer from "./components/music-player.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    MusicPlayer,
  },
  setup() {
    const winW = document.documentElement.clientWidth;
    const winH = document.documentElement.clientHeight;
    console.log((app.style.width = winW + "px"));
    console.log((app.style.height = winH + "px"));

    const store = useStore();
    const hasSrc = computed(() => {
      return store.state.songURL !== "";
    });

    return{
      hasSrc
    }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: rgb(235, 235, 235);
}

#app::-webkit-scrollbar {
  display: none;
}
</style>
