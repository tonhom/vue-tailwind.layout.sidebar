<template>
  <div class="flex min-h-full items-stretch w-full">
    <div class="h-full flex-grow-0 flex-shrink-0 w-60">
      <div class="flex flex-col bg-gray-400 overflow-y-auto h-full divide-y">
        <div class="py-4">fix header</div>
        <div class="text-white h-full overflow-y-auto">
          <div style="height: 1000px;">test</div>
        </div>
      </div>
    </div>
    <div
      class="h-full w-full flex-auto max-w-full overflow-y-auto overflow-x-hidden"
      id="main-content"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import TopbarStore from './store/TopbarStore'
export default {
  provide: [TopbarStore],
  mounted() {
    document.getElementById("main-content").onscroll = function (e) {
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      console.log(scrollTop, toolbar.offsetTop);
      // left.offsetTop;

      if (scrollTop >= -57) {
        TopbarStore.methods.setFixed(true)
      } else {
        TopbarStore.methods.setFixed(false)
      }

    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
