<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="test">apitest</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import api from '@/service/api'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    test () {
      console.log(api.login(), 'login');
    }
  }
}
</script>
