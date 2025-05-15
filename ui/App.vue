<script setup lang="ts">
import Parts from "./component/Parts.vue";
function create() {
  parent.postMessage({ pluginMessage: { type: "create-rectangles" } }, "*");
}
</script>

<!-- ui/App.vue -->
<template>
  <div class="p-4">
    <h1 class="text-lg font-bold mb-2">Vue-Plugin Demo</h1>
    <button class="px-4 py-2 rounded bg-blue-600 text-white" @click="create">
      Create Rectangle
    </button>
    <Parts> I am a part </Parts>
  </div>
</template>
