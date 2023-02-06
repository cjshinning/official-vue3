<script setup>
import {ref, reactive} from 'vue';

const activeColor = ref('red');
const fontSize = ref(30);

const styleObject = {
  color: 'red',
  fontSize: '13px'
}

</script>

<template>
    <div :style="{color: activeColor, fontSize: fontSize + 'px'}">內联样式1</div>
    <div :style="styleObject">內联样式2</div>
</template>