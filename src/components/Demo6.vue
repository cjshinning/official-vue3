<script setup>
import {ref,reactive} from 'vue';

const isActive = ref(true);
const hasError = ref(false);

const classObject = reactive({
  active: true,
  'text-danger': false
})

const activeClass = ref('active');
const errorClass = ref('text-danger');

</script>

<template>
    <div class="static" :class="{acive: isActive, 'text-danger': hasError}">类与样式绑定1</div>
    <div :class="classObject">类与样式绑定2</div>
    <div :class="[activeClass, errorClass]">类与样式绑定3</div>
    <div :class="[isActive ? activeClass : '', errorClass]">类与样式绑定4</div>
    <div :class="[{active: isActive}, errorClass]">类与样式绑定5</div>
</template>