<script setup>
import {ref, reactive} from 'vue';

const message = ref('');

const checked = ref(true);

const checkedNames = ref([]);

const picked = ref('One');

// const selected = ref('');

const selected = ref('A');

const options = ref([
  {text: 'One', value: 'A'},
  {text: 'Two', value: 'B'},
  {text: 'Three', value: 'C'},
])
</script>

<template>
  <h2>文本</h2>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <hr>
  <h2>多行文本</h2>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;">{{ message }}</p>
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <hr>
  <h2>复选框</h2>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <br>
  <div>Checked names: {{ checkedNames }}</div>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>

  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>

  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>

  <hr>
  <h2>单选按钮</h2>
  <div>Picked: {{ picked }}</div>

  <input type="radio" id="one" value="One" v-model="picked" />
  <label for="one">One</label>

  <input type="radio" id="two" value="Two" v-model="picked" />
  <label for="two">Two</label>

  <hr>
  <h2>选择器</h2>
  <div>Selected: {{selected}}</div>
  
  <!-- <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select> -->

  <!-- <select v-model="selected" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select> -->

  <select v-model="selected">
    <option v-for="option in options" :value="option.value">
      {{option.text}}
    </option>
  </select>
</template>