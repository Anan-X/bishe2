<template>
  <div id="sunzi">
    <p>child</p>
    我是孙子
    name:{{childName}}
    <button @click="foo1">变色</button>
    <p :class="{active:isActive}">lallalalalal</p>
  </div>
</template>

<script>
export default {
  props:{
    childName : String
  },
  data() {
    return{
      isActive: false
    }
  },
  methods: {
    foo1() {
      this.isActive = !this.isActive 
    }
  },
  created() {
    console.log("我被创建了child")
    console.log(this.$route.fullPath)
  }
}
</script>

<style>
#sunzi {
    width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: auto;
}

.active {
  color: red;
}
</style>