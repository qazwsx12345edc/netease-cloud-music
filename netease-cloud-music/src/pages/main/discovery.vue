<template>
  <div class="discovery">
    <DiscoveryMenu :isShow="isShowMenu" @unshowMenu = "unshowMenu"/>
    <div class="discovery__header">
      <div class="discovery__header__menu" @click="showMenu()">
        <div>···</div>
      </div>
      <div class="discovery__header__search">
        <van-field
          left-icon="search"
          :placeholder="defaultSearch.showKeyword"
          @click="moveToSearch"
        />
      </div>
      <div class="discovery__header__listen">
        <van-icon name="scan" size="24" />
      </div>
    </div>

    <div class="discovery__content">
      <div class="discovery__content__divider"></div>
      <div class="discovery__content__swipe" ref="swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item><div>1</div></van-swipe-item>
          <van-swipe-item><div>2</div></van-swipe-item>
          <van-swipe-item><div>3</div></van-swipe-item>
          <van-swipe-item><div>4</div></van-swipe-item>
        </van-swipe>
      </div>

      <div class="discovery__content__recommend">
        <div class="title-line">
          <h3>推荐歌单</h3>
          <div class="show-more">更多></div>
        </div>
        <div class="recommend-list">
          <div
            class="recommend-list__item"
            v-for="item in recommendList"
            :key="item.id"
          >
            <img :src="item.picUrl" />
            <p style="height: 25%; overflow: hidden; font-size: 13px">
              {{ item.name }}
            </p>
            <PlayTimes :times="item.trackCount" class="play-times" />
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="discovery__content__selected"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {useRouter} from 'vue-router'

import PlayTimes from "../../components/play-times.vue";
import DiscoveryMenu from "../../components/discovery-menu.vue";
export default {
  components: {
    PlayTimes,
    DiscoveryMenu,
  },
  setup() {
    const router = useRouter()
    const recommendList = ref("");
    const defaultSearch = ref("");
    GET({
      path: "/recommend/resource",
      data: {
        timestamp: Date.now(),
      },
    }).then((res) => {
      if (res.code === 200) {
        recommendList.value = res.recommend;
      }
    });

    GET({
      path: "/search/default",
      data: {
        timestamp: Date.now(),
      },
    }).then((res) => {
      defaultSearch.value = res.data;
    });
    const isShowMenu = ref(false);

    const showMenu = () => {
      isShowMenu.value = true;
    };

    const unshowMenu = () => {
      isShowMenu.value = false
    }

    const moveToSearch = () => {
      router.push('/search')
    }

    return {
      recommendList,
      isShowMenu,
      showMenu,
      unshowMenu,
      defaultSearch,
      moveToSearch
    };
  },
};
</script>

<style lang="scss" src="..\..\assets\css\discovery.scss">
</style>