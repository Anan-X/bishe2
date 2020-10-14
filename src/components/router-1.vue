<template>
  <div>
      我是router1
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.query.id)
    }
}
</script>

<style>

</style>