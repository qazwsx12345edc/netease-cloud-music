<template>
  <Search :searchValue="keywords" @keydown.enter="search" @changeSearchValue="changeSearchValue"/>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Search from "../../components/search.vue";
import searchVue from '../../components/search.vue';

export default {
  components: {
    Search,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const keywords = ref("");
    keywords.value = route.params.keywords;
    const search = () => {
      if (keywords.value !== "") {
        GET({
          path: "/search/multimatch",
          data: {
            keywords: keywords.value,
          },
        }).then((res) => {
          if (res.code === 200) {
            console.log(res);
          }
        });
      }
    };
    search();

    const changeSearchValue = (newValue) => {
      searchVue.value = newValue
    }

    return {
      keywords,
      search,
      changeSearchValue
    };
  },
};
</script>

