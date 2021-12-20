<template>
  <view class="detail">
    <image :src="download_url" class="img"/>
    <nut-cell-group title="详细信息">
      <nut-cell title="id" :desc="id"></nut-cell>
      <nut-cell title="author" :desc="author"></nut-cell>
      <nut-cell title="width" :desc="width"></nut-cell>
      <nut-cell title="height" :desc="height"></nut-cell>
      <nut-cell title="url" :desc="url"></nut-cell>
      <nut-cell title="download_url" :desc="download_url"></nut-cell>
    </nut-cell-group>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import { useStore } from "vuex";
import { computed, onMounted, reactive, toRefs } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    const params = Taro.getCurrentInstance().router.params;
    const state = reactive({
      pictures: computed(() => store.state.pictures),
      id: "",
      author: "",
      width: "",
      height: "",
      url: "",
      download_url: "",
    });

    const methods = {
      init: ({ idx }) => {
        const data = state.pictures[idx];
        state.id = String(data.id);
        state.author = String(data.author);
        state.width = String(data.width);
        state.height = String(data.height);
        state.url = String(data.url);
        state.download_url = String(data.download_url);
      },
    };

    onMounted(() => {
      methods.init(params);
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.detail {
  margin: 8px 16px;

  .img{
      width: 100%;
      height: 300px;
      margin: auto;
  }
}
</style>