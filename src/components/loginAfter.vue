<template>
  <div>
      <h1>尊敬的{{name}},你好</h1>
  </div>
</template>

<script>
export default {
    data() {
        return{
            name: ''
        }
    },
    created() {
       this.name = this.$route.query.name
    }
}
</script>

<style>

</style>