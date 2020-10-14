<template>
  <div>
    <van-divider />
    <!-- 功能块 -->
    <div>
      <van-cell is-link @click="toOrder">我的订单</van-cell>
    </div>
    <!-- 登录 -->
    <div v-if="!isAdmin">
      <van-cell is-link @click="login">登录</van-cell>
    </div>
    <!-- 注册 -->
    <div v-else>
      <van-cell is-link @click="showPopup">注销</van-cell>
      <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '30%' }">
        <h3 class="title">是否确认注销</h3>
        <van-button @click="exitBtn" class="btn" type="primary">确定注销</van-button>
      </van-popup>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      login() {
        this.$router.push({
          path: '/login'
        })
      },
      toOrder() {
        this.$router.push({
          path: '/order'
        })
      },
      showPopup() {
        this.show = true;
      },
      exitBtn() {
        this.$store.commit('exit')
        this.$router.go(0)
      }
    },
    computed: {
      isAdmin() {
        return this.$store.state.admin
      }
    }
  }
</script>

<style>
  .title {
    margin: auto;
    text-align: center;
    padding-top: 50px;
  }

  .btn {
    width: 70%;
    margin-left: 15%;
    margin-top: 40px;
  }
</style>