<template>
  <div class="home max-w-full w-full">
    <div class="border-b border-gray-300 p-4 toolbar-fixed" id="toolbar">toolbar</div>
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

      <div style="min-height:1000px;"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  inject: ["TopbarStore"],
  components: {
    HelloWorld
  },
  computed: {
    topbarFix() {
      return this.TopbarStore.state.fixed
    }
  },
  mounted() {
  }
}
</script>
