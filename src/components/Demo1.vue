<script setup>
import {ref, onMounted} from 'vue';

const count = ref(0);

onMounted(() => {
  console.log(`The initial count is ${count.value}`)
})
</script>

<template>
  <button @click="count++">{{ count }}</button>
</template>
