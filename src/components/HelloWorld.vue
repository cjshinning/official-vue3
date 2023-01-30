<script setup>
import { ref, reactive, onMounted } from 'vue'

defineProps({
  msg: String,
})

// 用来改变状态、触发更新的函数
function increment(){
  count.value++;
}

// 响应式状态
const count = ref(0)
const lists = ['zs' ,'ls' ,'ww']

// 普通状态
const rawHtml = '<span style="color: red">This should be red.</span>';
const dynamicId = 'myApp';
const isButtonDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}`)
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <h2>模板语法</h2>
  <h3>文本插值</h3>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>

  <h3>Attribute 绑定</h3>
  <div v-bind:id="dynamicId">my app</div>
  <button :disabled="isButtonDisabled">Button</button>
  <div v-bind="objectOfAttrs">some demo</div>

  <ul>
    <li v-for="(item,index) in lists" :id="`list-${index}`">{{item}}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
