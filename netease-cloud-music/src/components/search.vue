<template>
  <div class="search__header">
    <van-icon name="arrow-left" @click="moveBack" />
    <van-search :placeholder="placeholder" />
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: {
    placeholder: String,
  },
  setup() {
    const router = useRouter()

    const moveBack = () => {
      router.go(-1)
    };

    return {
      moveBack,
    };
  },
};
</script>

<style lang="scss" src="..\assets\css\search.scss">
</style>