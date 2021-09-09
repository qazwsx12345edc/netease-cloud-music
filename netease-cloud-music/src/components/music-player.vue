<template>
  <div class="player">
    <audio :src="songURL" autoplay></audio>
    <div class="img">
      <!-- <img :src="songImg" alt=""> -->
    </div>
    <div>
      {{songName}}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore()
    const songURL = computed(() => {
      return store.state.songURL
    });

    const songImg = computed(()=>{
      return store.state.songImg
    })

    const songName = computed(()=>{
      return store.state.songName
    })

    return {
      songURL,
      songImg,
      songName
    };
  },
};
</script>

<style lang="scss">
.player {
  position: fixed;
  height: 7%;
  width: 100%;
  bottom: 0;
  background-color: red;
  audio {
    width: 100%;
    height: 100%;
    border-radius: none;
    color: #fff;
    background-color: rgb(245, 245, 245);
  }
}
</style>