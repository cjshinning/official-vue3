<script setup>
import {ref, reactive} from 'vue';

const count = ref(0);

const name = ref('vue.js');

function greet(event){
  alert(`Hello ${name.value}`);
  if(event){
    alert(event.target.tagName);
  }
}

function say(message){
  alert(message);
}

function warn(message, event){
  if(event){
    event.preventDefault();
  }
  alert(message);
}
</script>

<template>
  <button @click="count++">Add 1</button>
  <p>Count is: {{count}}</p>
  <hr>
  <button @click="greet">Greet</button>
  <hr>
  <button @click="say('hello')">Say hello</button>
  <button @click="say('bye')">Say bye</button>
  <hr>
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>
  <button @click="(event) => warn('Form cannot be submitted yet.', event)">Submit</button>
</template>