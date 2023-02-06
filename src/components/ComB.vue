<script setup>
import {ref} from 'vue';

const msg = ref('');
</script>


<template>
    <p>Current component: B</p>
    <span>Message is: {{msg}}</span>
    <input type="text" v-model="msg">
</template>