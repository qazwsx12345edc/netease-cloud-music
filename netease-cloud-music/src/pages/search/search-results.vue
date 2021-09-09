<template>
  <div class="search-result">
    <Search
      :searchValue="keywords"
      @keydown.enter="search()"
      @changeSearchValue="changeSearchValue"
    />
    <div style="height: 7%"></div>
    <SongItem v-for="item in songs" :key="item.id" :song="item" />
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Search from "../../components/search.vue";
import SongItem from "../../components/song-item.vue";

export default {
  components: {
    Search,
    SongItem,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const keywords = ref("");
    keywords.value = route.query.keywords;
    const songs = ref();
    const search = () => {
      if (keywords.value !== "") {
        GET({
          path: "/search",
          data: {
            keywords: keywords.value,
          },
        }).then((res) => {
          if (res.code === 200) {
            songs.value = res.result.songs;
          }
        });
      }
    };
    search();

    const changeSearchValue = (newValue) => {
      keywords.value = newValue;
    };

    return {
      keywords,
      search,
      changeSearchValue,
      songs,
    };
  },
};
</script>

<style lang="scss" src="..\..\assets\css\search-result.scss">
</style>