<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
</script>

<template>
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal=false">
      <template #header>
        <h3>custome header</h3>
      </template>
    </modal>
  </Teleport>
</template>

<style>

</style>