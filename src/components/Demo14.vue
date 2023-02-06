<script setup>
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';
import MyButton from './MyButton.vue';

function callback(){
  console.log('callback');
}

const count = ref(0);

function increaseCount(n){
  count.value += n;
}
</script>

<template>
  <MyComponent @some-event="callback" />
  <!-- <MyButton @increase-by="(n) => count += n"/> -->
  <MyButton @increase-by="increaseCount"/>
  <p>{{count}}</p>
</template>