<template>
  <div class="song" @click="play(song)">
    <div class="song__name">
      {{ song.name }}
      <span v-if="song.transNames">{{ "(" + song.transNames[0] + ")" }}</span>
    </div>

    <div v-for="artist in song.artists" :key="artist.id" class="song__artist">
      {{ artist.name }}
    </div>
    <!-- {{song}} -->
    <van-icon name="ellipsis" />
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    song: Object,
  },
  setup() {
    const store = useStore();
    const play = (song) => {
      const songUrl = `https://music.163.com/song/media/outer/url?id=${song.id}.mp3`;
      store.commit("set_song_url", songUrl);
      store.commit("set_song_name", song.name)
      console.log(song.album.picId)
      // store.commit("set_song_img", song.artists[0].img1v1Url)
    };

    return {
      play,
    };
  },
};
</script>

<style lang="scss" src="..\assets\css\song-item.scss">
</style>
