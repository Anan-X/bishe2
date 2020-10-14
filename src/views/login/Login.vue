<template>
  <div>
    <!-- 导航栏 -->
    <nar-bar title="登录"
    :isLeftArrow=true
    :isRightArrow=true
    rightText="注册"
    @clickRight="onClickRight" />
    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
  import NarBar from "components/common/narbar/NarBar";
  import {apiLogin} from 'network/user'
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    components: {
      NarBar
    },
    methods: {
      onSubmit(values) {
        // console.log('submit', values);
        apiLogin(values).then(res =>{
          if(res.data.code === 200){
          // 把用户信息存储在store中
          this.$store.commit('loginAfter', res)
          this.$toast.success('登陆成功')
          this.$router.go(-1)
        } else {
          this.$toast.fail(res.data.msg)
        }
        })
      },
      onClickRight() {
        this.$router.push({
          path: '/register'
        })
      }
    },
  }
</script>

<style>

</style>