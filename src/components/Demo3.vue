<script setup>
import {ref} from 'vue';
const count = ref(0);

function increment(){
    count.value++;
}

</script>

<template>
    <div>the number is: {{count}}</div>
    <button @click="increment">{{count}}</button>
</template>