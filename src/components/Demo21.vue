<script setup>
import {shallowRef} from 'vue';
import CompA from './ComA.vue';
import CompB from './ComB.vue';

const current =shallowRef(CompA);

</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA">A</label>
    <label><input type="radio" v-model="current" :value="CompB">B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive> 
  </div>
</template>

<style>

</style>