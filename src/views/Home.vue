<template>
  <div class="home max-w-full w-full h-full">
    <div class="border-b bg-white border-gray-300 p-4 sticky top-0" id="toolbar">toolbar</div>
    <!-- :class="{'toolbar-fixed': topbarFix}" -->
    <div class="p-4">
      <img alt="Vue logo" src="../assets/logo.png" />

      <div>
        <div class="overflow-x-auto max-w-full overflow-y-hidden">
          <table class="divide-y border border-gray-200 pr-8 mr-8" style="width: 2000px;">
            <thead>
              <tr>
                <th>test</th>
                <th>test2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>val1</td>
                <td>val2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <scrollbar style="height:1000px;">
        <div class="scroll-content">
          <div style="height: 2000px;">test</div>
        </div>
        <div class="scrollbar-track scrollbar-track-y">
          <div class="scrollbar-thumb scrollbar-thumb-y"></div>
        </div>
      </scrollbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TopbarStore from '@/store/TopbarStore'

export default {
  name: 'Home',
  provide: [TopbarStore],
  components: {
    HelloWorld
  },
  computed: {
    topbarFix() {
      return TopbarStore.state.fixed
    }
  },
  mounted() {
  }
}
</script>
