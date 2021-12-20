export default {
  pages: [
    'pages/index/index',
    'pages/detail/detail',
    'pages/collect/index'
  ],
  tabBar: {
    color: 'gray',
    selectedColor: 'black',
    backgroundColor: 'white',
    list: [
        {
            pagePath: 'pages/index/index',
            text: '首页',
        },
        {
            pagePath: 'pages/collect/index',
            text: ' 收藏',
        }]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
