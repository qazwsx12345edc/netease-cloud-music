<template>
  <div class="search__header">
    <van-icon name="arrow-left" @click="moveBack" />
    <van-search :placeholder="placeholder" v-model="value" autofocus/>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
  props: {
    placeholder: String,
    searchValue: String,
  },
  setup(props, context) {
    const router = useRouter();

    const moveBack = () => {
      router.go(-1);
    };

    const value = computed({
      get() {
        return props.searchValue
      },
      set(val) {
        context.emit("changeSearchValue", val)
      }
    });

    return {
      moveBack,
      value
    };
  },
};
</script>

<style lang="scss" src="..\assets\css\search.scss">
</style>