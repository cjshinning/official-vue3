<script setup>
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
import UserName from './UserName.vue';

const message = ref('hello')

const first = ref('John');
const last = ref('Deo');
</script>

<template>
  <CustomInput v-model="message" /> {{ message }}

  <hr>
  <h1>{{first}} {{last}}</h1>
  <UserName
    v-model:first-name="first"
    v-model:last-name="last"
  />
</template>