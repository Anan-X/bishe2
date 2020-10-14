<template>
  <div>
      
          账号：<input v-model="username" type="text">
          密码：<input v-model="password" type="text">
          <button @click="login">登录</button>
  </div>
</template>

<script>
import {Login} from '../network/user'
export default {
    data() {
        return{
            username: '',
            password: '',
        }
    },
    methods: {
        login() {
            let data = {
                username: this.username,
                password: this.password
            }
            Login(data)
           .then(res => {
               console.log(res)
               if(res.data.code==200){
                   this.$router.push({
                       path:'/loginAfter'
                   })
               }else{
                   alert(res.data.msg)
               }
           })
        }
    }
}
</script>

<style>

</style>