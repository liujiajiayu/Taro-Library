<template>
    <view class="index">
        <view class="infiniteLi" v-for="(item,index) in myFollow" :key="item.id">
            <img :src="`https://picsum.photos/id/${item.id}/200`" alt="" @click="toDetail(index)">
            <view>
                {{ item.id+"-"+item.author }}
                <nut-icon
                    name="del"
                    :key="item.id"
                    @click="del2follow(item)"
                    class="del"
                />
            </view>
        </view>
    </view>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";
import Taro from '@tarojs/taro';

export default {
    setup(){
        const store = useStore();
        const myFollow = computed (() => store.state.myFollow);
        const del2follow = (item) => {
            store.commit("DEL2_TO_FOLLOW",item)
        }
        const toDetail = (index) => {
            Taro.navigateTo({
                url:`/pages/detail/detail?idx=${index}`
            })
        }
        return{
            myFollow,
            del2follow,
            toDetail
        }
    }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}
.resize{
  border-radius: 8px;
}
.del{
    left: 5px;
    top: 5px;
    color:saddlebrown;
}
</style>