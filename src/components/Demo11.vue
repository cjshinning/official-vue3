<script setup>
import { reactive, computed, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount } from 'vue'

const state = reactive({
  count: 0,
  double: computed(() => state.count * 2)
})

function increment(){
  state.count++;
}

onUpdated(() => {
  console.log('onUpdated');
})

onUnmounted(() => {
  console.log('onUnmounted');
})

onBeforeUnmount(() => {
  console.log('onBeforeUnmount');
})

onBeforeUpdate(() => {
  console.log('onBeforeUpdate');
})

onMounted(() => {
  console.log('onMounted');
})

onBeforeMount(() => {
  console.log('onBeforeMount');
})
console.log('setup');

</script>

<template>
  <h2>生命周期钩子</h2>
  <button @click="increment">
    count: {{ state.count }}, double: {{ state.double }}
  </button>
</template>