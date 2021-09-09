<template>
  <Search
    :placeholder="defaultSearch.showKeyword"
    :searchValue="searchValue"
    @changeSearchValue="changeSearchValue"
    @keydown.enter="search"
  />
  <div class="search__content">
    <div style="height:7%"></div>
    <div class="search__content__hot">
      <div class="hot-title">热搜榜</div>
      <div
        class="hot-item"
        v-for="(item, index) in hot"
        :key="item.first"
        @click="searchHotItem(item)"
      >
        <span class="index">{{ index + 1 }}</span>
        {{ item.first }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Search from "../../components/search.vue";

export default {
  components: {
    Search,
  },
  setup() {
    const router = useRouter()
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
    });

    const searchValue = ref("");

    const changeSearchValue = (newValue) => {
      searchValue.value = newValue;
    };

    const searchHotItem = (item) => {
      searchValue.value = item.first;
      search()
    };

    const search = () => {
      router.push({name: "search-results", query: {keywords: searchValue.value}})
    };

    return {
      defaultSearch,
      searchValue,
      hot,
      search,
      searchHotItem,
      changeSearchValue,
    };
  },
};
</script>

<style lang="scss" src="..\..\assets\css\search-page.scss">
</style>