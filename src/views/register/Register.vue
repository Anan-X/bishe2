<template>
  <div>
    <!-- 导航栏 -->
    <nar-bar title="注册" :isLeftArrow=true />

    <!-- 表单 -->
    <van-form @submit="onSubmit">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
        @blur="isUsernameBlur" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
              <van-field
        v-model="ConfirmPass"
        type="password"
        name="ConfirmPass"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button :disabled="isTrue" round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
  import NarBar from "components/common/narbar/NarBar";

  import {apiRegister,isUsername} from 'network/user'
  export default {
     data() {
      return {
        username: '',
        password: '',
        ConfirmPass: '',
        isTrue: true
      };
    },
    components: {
      NarBar
    },
    methods: {
      isUsernameBlur() {
        if(this.username.trim()!=''){
          isUsername(this.username)
        .then(res => {
          if(res.data.code ===200){
            this.isTrue = false
            this.$toast.success(res.data.msg)
          }else{
            this.isTrue = true
            this.$toast.fail(res.data.msg)
          }
        })
        }
      },
       onSubmit(values) {
        if (this.password === this.ConfirmPass) {
        // 提交
        console.log('submit', values);
        apiRegister(values).then(res => {
          console.log(res)
          if(res.data.code === 200) {
            this.$toast.success(res.data.msg)
            this.$router.go(-1)
          } else {
            this.$notify({
            type: 'danger',
            message: res.data.msg,
            duration: 800
          })
          }
        })
      } else {
        this.$notify({
            type: 'danger',
            message: '两次密码不一致',
            duration: 800
          })
      }
      },
    }
  }
</script>

<style>

</style>