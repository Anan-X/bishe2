<template>
  <div>
    <nar-bar title="购物车"/>
     <!-- 底部导航栏 -->
      <tab-bar :items="tabBar" @tabItemClick="tabItemClick" />
  </div>
</template>

<script>
import NarBar from "components/common/narbar/NarBar";
import TabBar from "components/common/tabbar/TabBar";
export default {
  data() {
    return{
      tabBar: [
        {path: '/home', icon: 'home-o', title: '首页'},
        {path: '/cart', icon: 'cart-o', title: '购物车'}, 
        {path: '/porfile', icon: 'user-o', title: '我的'}
        ]
    }
  },
  components: {
    NarBar,
    TabBar
  },
   methods: {
    tabItemClick(item) {
      this.$router.push({
        path: item.path
      })
    }
  },
}
</script>

<style>

</style>