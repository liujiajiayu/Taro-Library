import * as Vuex from "vuex";
import Taro from '@tarojs/taro'

const store = Vuex.createStore({
    state() {
        return {
            pictures: [],
            myFollow: []
        }
    },
    mutations: {
        LOAD_PICTURE_MUTATIONS: (state, pictures) => {
            state.pictures = state.pictures.concat(pictures);
        },
        ADD_TO_FOLLOW:(state,index) => {
            state.myFollow.push(state.pictures[index])
            Taro.showToast({
                title:'收藏成功',
                icon:'success',
                duration:500
            })
        },
        DEL2_TO_FOLLOW:(state,item) => {
            for(let i in state.myFollow){
                if (state.myFollow[i].id == item.id) {
                    state.myFollow.splice(i, 1)
                }
            }
            Taro.showToast({
                title: '从收藏夹中移除',
                icon: 'none',
                duration: 1000
            })
        },
        updatefinishTasks(state, item) {
            state.myFollow = item
        }
    },
    actions: {
        LOAD_PICTURE_MUTATIONS: async(context, { page = 1, limit = 30 }) => {
            const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
            const resp = await Taro.request({ url })
            return resp.data
        }
    }
})

export default store