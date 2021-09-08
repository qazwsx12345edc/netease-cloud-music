<template>
  <Search :placeholder="defaultSearch.showKeyword" :v-model="searchValue" />
  <div class="search__content">
    <div class="search__content__hot">
      <div class="hot-title">热搜榜</div>
      <div class="hot-item" v-for="(item, index) in hot" :key="item.first">
        <span class="index">{{ index + 1 }}</span>
        {{ item.first }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Search from "../components/search.vue";

export default {
  components: {
    Search,
  },
  setup() {
    const defaultSearch = ref("");
    const hot = ref();
    GET({
      path: "/search/default",
      data: {
        timestamp: Date.now(),
      },
    }).then((res) => {
      defaultSearch.value = res.data;
    });

    GET({
      path: "/search/hot",
      daat: {
        timestamp: Date.now(),
      },
    }).then((res) => {
      hot.value = res.result.hots;
      console.log(hot.value);
    });

    return {
      defaultSearch,
      searchValue: ref(),
      hot,
    };
  },
};
</script>

<style lang="scss" src="..\assets\css\search-page.scss">
</style>