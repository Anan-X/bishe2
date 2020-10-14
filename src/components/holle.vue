<template>
  <div id="parent">
    <p>holle</p>
    我是子组件 
    name:{{name}}
    list:{{list}}
    <child :childName="name"></child>
  </div>
  
</template>


<script>
import Child from "./child"
export default {
  data() {
    return{
      name: '李四'
    }
  },
  components: {
    child: Child
  },
  props: {
    list:Array
  },
  created() {
    console.log("我被创建了hello")
    console.log(this.$route.fullPath)
  }
}
</script>

<style scoped>
#parent {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  margin: auto;
}
</style>