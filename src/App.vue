<template>
  <div class="flex min-h-full items-stretch w-full">
    <div class="h-full flex-grow-0 flex-shrink-0 w-60">
      <div class="flex flex-col bg-gray-50 overflow-y-auto h-full divide-y">
        <div class="py-4">fix header</div>
        <div class="flex-auto overflow-y-auto">
          <!-- <scrollbar>
            <div class="scroll-content">
              <div style="height: 1000px;">test</div>
            </div>
            <div class="scrollbar-track scrollbar-track-y">
              <div class="scrollbar-thumb scrollbar-thumb-y"></div>
            </div>
          </scrollbar>-->
          <perfect-scrollbar :options="settings">
            <div style="height: 1000px;">test</div>
          </perfect-scrollbar>
        </div>
      </div>
    </div>
    <div class="w-full flex-auto min-h-0 overflow-y-auto overflow-x-hidden" id="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopbarStore from './store/TopbarStore'
export default {
  provide: [TopbarStore],
  data: () => ({
    settings: {
      suppressScrollY: false,
      suppressScrollX: true,
      wheelPropagation: false,
      wheelSpeed: 1
    }
  }),
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
  },
  methods: {
    onScroll(event) {
      console.log(this.$refs.scrollbar.ps, event);
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

.ps {
  height: 100%;
}
</style>
