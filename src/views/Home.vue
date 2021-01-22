<template>
  <div class="home">
    <Header />
    <Section class="section-wrap"/>
    <Foot class="foot"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Foot from '@/layout/Foot';
import Header from '@/layout/Header';
import Section from '@/layout/Section';
export default {
  name: 'Home',
  components: {
    Foot,
    Header,
    Section
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;
  > .section-wrap {
    width: 100%;
    margin: 0 auto;
  }
}
.foot { position: absolute; bottom: 0;}
</style>