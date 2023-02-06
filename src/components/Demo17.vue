<script setup>
import {ref} from 'vue';
import { useMouse } from './mouse';
import {useFetch} from './fetch';

const { x, y } = useMouse();

const {data, error} = useFetch('https://jsonplaceholder.typicode.com/todos/?id=1')
</script>

<template>
  Mouse position is at: {{ x }}, {{ y }}

  <hr>

  <div v-if="error">Oops! Error encoutered: {{error.message}}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{data}}</pre>
  </div>
  <div v-else>loading</div>
</template>