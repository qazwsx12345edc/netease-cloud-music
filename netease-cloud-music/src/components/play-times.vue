// 播放次数

<template>
  <div class="play-times">
    <van-icon name="play" />
    {{ times }}万&nbsp;
  </div>
</template>

<script>
export default {
  props: {
    times: Number,
  },
};
</script>

<style lang="scss">
.play-times {
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 10px;
}
</style>