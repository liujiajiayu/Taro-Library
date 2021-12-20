<template>
  <view class="index" v-if="false">
    <view>
      <img :src="`https://picsum.photos/id/1/200`" class="one" />
      <nut-button size="large" type="primary" class="loginbutton" color="green" @click="login()">微信一键登录</nut-button>
    </view>
  </view>

  <view class="index" v-else>
    <nut-toast
      :msg="toast.msg"
      v-model:visible="toast.show"
      :type="toast.type"
      :cover="toast.cover"
    />
    <nut-cell>
      <view-block class="infiniteUl">
        <nut-infiniteloading
          pull-icon="JD"
          load-txt="loading"
          load-more-txt="没有了"
          container-id="scrollDemo"
          :is-open-refresh="infiniteloading.isOpenRefresh"
          :has-more="infiniteloading.hasMore"
          @load-more="loadMore"
        >
          <view-block
            class="infiniteLi"
            v-for="(item, index) in pictures"
            :key="item.id"
          >
            <img
              :src="`https://picsum.photos/id/${item.id}/200`"
              @click="toDetail(index)"
            />
            <view>
              {{ item.id+"-"+item.author }}
              <nut-icon
                class="follow"
                name="heart-fill"
                :key="item.id"
                @click="addfollow(index)"
              />
            </view>
          </view-block>
        </nut-infiniteloading>
      </view-block>
    </nut-cell>
  </view>
</template>

<script>
import { ref, toRefs, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";
import Taro from "@tarojs/taro";``
export default {
  name: "Index",
  components: {},
  setup() {
    const store = useStore();
    const state = reactive({
      pictures: computed(() => store.state.pictures),
      page: {
        num: 1,
        limit: 5,
      },
      toast: {
        msg: "toast",
        type: "text",
        show: false,
        cover: false,
      },
      infiniteloading: {
        isOpenRefresh: false,
        hasMore: true,
      },
    });
    const loginURL = "http://10.1.86.79:1919/login"
    const setInfoURL = "http://10.1.86.79:1919/user/fav"
    const getInfoURL = "http://10.1.86.79:1919/user/fav"

    const loading = ref(true);

    onMounted(() => {
      methods.init();
      methods.openToast();
    })
    
    Taro.onAppHide(() => {
      if(store.state.myFollow.length >= 0){
        for(let i; i<store.state.myFollow.length;i++){
          store.state.myFollow[i].is_collect = 1
        }
        Taro.request({
          url:setInfoURL,
          data:{
            favList: JSON.stringify(store.state.myFollow),
            nickName: Taro.getStorageSync("userInfo").userInfo.nickName,
            signature: Taro.getStorageSync("openid")
          },
          method:"POST"
        })
      }
    })
    
    const addfollow = (index) => {
      store.commit("ADD_TO_FOLLOW",index)
    }
    const delfollow = (id, index) => {
      store.commit("DEL_TO_FOLLOW",id, index)
    }

    const login = () => {
      Taro.getUserProfile({
        desc:'用于授权登录',//声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success:(userInfo) => {
          console.log(userInfo)
          Taro.setStorageSync("userInfo",userInfo)
          Taro.login({
            success:function(res){
              if(res.code){
                const loginData = {
                  appid: "wxbe4cff63a8f392c8",
                  secret: "53e244be5264bfa8fb3b79e3e082e739",
                  js_code: res.code
                }
                //发起网络请求
                Taro.request({
                  url:loginURL,
                  data:loginData,
                  success:(res) => {
                    console.log(res)
                    Taro.setStorageSync("openid",res.data.data)
                    console.log(res.data.data)
                    Taro.request({
                      url: getInfoURL,
                      data: {
                        nickName: userInfo.userInfo.nickName,
                        signature: res.data.data
                      },
                      success(res){
                        Taro.setStorageSync("data", res.data.data)
                        loading.value= false;
                      }
                    })
                  }
                })
              }else{
                console.log('登录失败'+res.errMsg)
              }
            }
          })
        }
      })
      // Taro.getSetting({//授权
      //   success(res){
      //     if(!res.authSetting['scope.userInfo']){
      //       Taro.authorize({
      //         scope:'scope.userInfo',
      //         success(){
      //           Taro.login()
      //         }
      //       })
      //     }
      //   }
      // })
    }
    const methods = {
      openToast: (type, msg, cover = false) => {
        state.toast.show = true;
        state.toast.msg = msg;
        state.toast.type = type;
        state.toast.cover = cover;
      },

      loadPage: async (page, limit) => {
        methods.openToast("loading", "加载中", true);
        try {
          const resp = await store.dispatch("LOAD_PICTURE_MUTATIONS", {
            page: page,
            limit: limit,
          });
          store.commit("LOAD_PICTURE_MUTATIONS", resp);
        } catch (error) {
          methods.openToast("fail", "加载失败");
          console.log(error.message())
        } finally {
          state.toast.show = false;
        }
      },

      loadMore: (done) => {
        methods.loadPage(++state.page.num, state.page.limit);
        done();
      },

      toDetail: (index) => {
        Taro.navigateTo({
          url: `/pages/detail/detail?idx=${index}`,
        });
      },

      init: () =>{
        methods.loadPage(state.page.num, state.page.limit);
      }
    };
    return {
      loading,
      login,
      addfollow,
      delfollow,
      ...toRefs(state),
      ...methods,
    };
  },
};
</script>

<style lang="scss">
.one{
  border-radius: 5px;
  height: 200px;
  width: 90%;
}
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.infiniteUl {
  height: 500px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.infiniteLi {
  margin-top: 10px;
  font-size: 14px;
  color: rgba(100, 100, 100, 1);
  text-align: center;
}

.follow{
  color: pink;
  top: 5px;
  left: 5px;
}
.loginbutton{
  background-color: green;
  color: aliceblue;
  width: 80%;
  display: inline-block;
}
</style>
