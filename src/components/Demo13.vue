<script setup>
import { ref } from 'vue';
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue';
import AlertBox from './AlertBox.vue';

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1);
</script>

<template>
  <h1>Here is a child component!</h1>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>

  <!-- <BlogPost title="My journey with Vue2" />
  <BlogPost title="Blogging with Vue2" />
  <BlogPost title="Why Vue is so fun2" /> -->

  <div :style="{fontSize: postFontSize + 'em'}">
    <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1">
    </BlogPost>
  </div>

  <AlertBox>
    Something bad happend
  </AlertBox>
</template>