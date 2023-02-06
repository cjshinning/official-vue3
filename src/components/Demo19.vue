<script setup>
import {ref} from 'vue';

const show = ref(true);
</script>

<template>
  <!-- <button @click="show=!show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>   -->
  <hr>
  <!-- <button @click="show=!show">Toggle Slide + Fade</button>
  <Transition name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>   -->
  <hr>
  <button @click="show=!show">Toggle</button>
  <Transition name="bounce">
    <p v-if="show" style="margin-top:20px;text-align:center">
      Hello here is some bouncy text
    </p>
  </Transition>
</template>

<style>
/* .v-enter-active,
.v-leave-active{
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to{
  opacity: 0;
} */

/* .slide-fade-enter-active{
  transition: all 0.3 ease-out;
}
.slide-fade-leave-active{
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to{
  transform: translateX(20px);
  opacity: 0;
} */

.bounce-enter-active{
  animation: bounce-in 0.5s;
}
.bounce-leave-active{
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in{
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(1.25);
  }
  100%{
    transform: scale(1);
  }
}
</style>