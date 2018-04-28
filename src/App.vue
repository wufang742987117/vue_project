<template>
  <div id="app">
    <transition name="direction">
      <!-- keep-alive 可以缓存，提高性能，与路由中的设置对应 -->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="direction">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
      direction() {
        const viewDir = this.$store.state.viewDirection;
        let tranName = '';

        if (viewDir === 'left') {
          tranName = 'slide-left'
        } else if (viewDir === 'right') {
          tranName = 'slide-right'
        } else {
          tranName = 'router-fade'
        }
        return tranName
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    height: 100%;
    width: 100%;
  }
</style>
