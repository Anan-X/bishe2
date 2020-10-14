<template>
  <div>
    <!-- 导航栏 -->
    <!-- <nar-bar title="校园二手交易平台" /> -->
    <!-- 搜索框 -->
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <!-- 轮播图 -->
    <swipe :images="imgs" />
    <!-- 页面导航 -->
    <van-grid clickable :column-num="2">
      <van-grid-item icon="manager-o" text="学生信息" to="/studentinfo" />
      <van-grid-item icon="orders-o" text="学生成绩" to="/score" />
    </van-grid>
    <!-- 底部导航栏 -->
    <tab-bar :items="tabBar" @tabItemClick="tabItemClick" />
  </div>
</template>

<script>
// import NarBar from "components/common/narbar/NarBar";
import Swipe from "components/common/swipe/Swipe";
import TabBar from "components/common/tabbar/TabBar";
export default {
  data() {
    return {
      value: '',
      imgs: [
        require("assets/img/19.png"),
        require("assets/img/20.png"),
        require("assets/img/22.png"),
      ],
      tabBar: [
        {path: '/home', icon: 'home-o', title: '首页'},
        {path: '/cart', icon: 'cart-o', title: '购物车'}, 
        {path: '/porfile', icon: 'user-o', title: '我的'}
        ]
    };
  },
  components: {
    // NarBar,
    TabBar,
    Swipe,
  },
  methods: {
    tabItemClick(item){
      this.$router.push({
        path: item.path
      })
    },
    onSearch(val) {
      this.$toast(val);
    },
    onCancel() {
      this.$toast('取消');
    },
  },
};
</script>

<style></style>
