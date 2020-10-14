<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    // 在页面加载时读取sessionStorage
    if (sessionStorage.getItem('store')) {

      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem('store'))))
      // console.log("state", this.$store.state)
    }
    // 在页面刷新时将store保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
    // console.log('lala',this.$store.state)
  },
  // mounted() {
  //   if(sessionStorage.getItem('store')) {
  //     apiGetUserInfo().then(res => {
  //       if (res.data.code === 200){
  //         this.$store.commit('loginAfter', res)
  //       }
  //     })
  //   }
  // }
}
</script>

<style>
</style>
