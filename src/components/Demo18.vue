<script setup>
const vFocus = {
  mounted: (el) =>{
    el.focus();
  }
}
</script>

<template>
  <input type="text" v-focus />
</template>