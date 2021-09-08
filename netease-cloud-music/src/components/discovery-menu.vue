<template>
  <div
    class="discovery-menu"
    :class="isShow ? 'menu-show' : 'menu-unshow'"
    ref="menu"
  >
    <div class="menu__content" v-if="userInfo">
      <div class="menu__content__header" @click="unshowMenu">
        <img :src="userInfo.avatarUrl || null" alt="" />
        <div style="padding-left: 15px">{{ userInfo.nickname }}</div>
        <van-icon name="arrow" />
      </div>
      <van-cell-group>
        <van-cell title="我的消息" is-link />
        <van-cell title="云贝中心" is-link />
        <van-cell title="创作者中心" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="云村有票" is-link />
        <van-cell title="商城" is-link />
        <van-cell title="游戏专区" is-link />
        <van-cell title="口袋彩铃" is-link />
      </van-cell-group>

      <van-cell-group>
        <van-cell title="设置" is-link />
        <van-cell title="夜间模式">
          <template #right-icon>
            <van-switch v-model="checked" size="20px"/>
          </template>
        </van-cell>
        <van-cell title="定时关闭" is-link />
        <van-cell title="个性装扮" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { watch, ref } from "vue";
export default {
  props: {
    isShow: Boolean,
  },
  setup(props, context) {
    const userInfo = ref();
    watch(
      () => props.isShow,
      () => {
        if (props.isShow === true) {
          GET({
            path: "/user/account",
            data: null,
          }).then((res) => {
            if (res.code === 200) {
              userInfo.value = res.profile;
              console.log(userInfo.value);
            }
          });
        }
      }
    );

    const unshowMenu = () => {
      context.emit("unshowMenu")
    };

    return {
      userInfo,
      checked: ref(false),
      unshowMenu
    };
  },
};
</script>

<style lang="scss" src="..\assets\css\discovery-menu.scss">
</style>