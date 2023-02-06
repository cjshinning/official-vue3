<script setup>
import {ref, computed} from 'vue';

const firstName = ref('John');
const lastName = ref('Deo');

const fullName = computed({
  get(){
    return firstName.value + ' ' + lastName.value;
  },
  set(newValue){
    [firstName.value, lastName.value] = newValue.split(' ');
  }
})

</script>

<template>
    <p>全名是:</p>
    <span>{{ fullName }}</span>
</template>