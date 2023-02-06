<script setup>
import {ref, reactive} from 'vue';

const parentMessage = ref('Parent');
const items = ref([{message: 'Foo'}, {message: 'Bar'}]);

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})

const todos = [
  {name: 'learning html', isComplete: true},
  {name: 'learning css', isComplete: false},
  {name: 'learning js', isComplete: false}
]
</script>

<template>
  <ul>
    <li v-for="(item, index) in items">
      {{parentMessage}} - {{index}} - {{item.message}}
    </li>
  </ul>
    <hr>
  <ul>
    <li v-for="({message}, index) in items">
      {{parentMessage}} - {{index+2}} - {{message}}
    </li>
  </ul>
    <hr>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{key}} : {{value}} : {{index}}
    </li>
  </ul>
  <hr>
  <span v-for="n in 10">{{n}}</span>
  <hr>
  <ul>
    <template v-for="todo in todos">
      <li v-if="!todo.isComplete">
        {{todo.name}}
      </li>
    </template>
  </ul>

</template>