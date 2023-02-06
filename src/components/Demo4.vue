<script setup>
import {reactive, computed} from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBookMessage = computed(()=>{
    return author.books.length > 0 ? 'Yes' : 'No';
})
console.log(publishedBookMessage.value);

function calculateBooksMessage(){
    return author.books.length > 0 ? 'Yes' : 'No';
}

const now = computed(() => Date.now())

</script>

<template>
    <p>Has published books:</p>
    <!-- <span>{{ publishedBookMessage }}</span> -->
    <span>{{ calculateBooksMessage() }}</span>
    <span>{{ now }}</span>
</template>