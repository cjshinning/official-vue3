<script setup>
import {store} from './store.js';
</script>

<template>
    <div>
        <button @click="store.increment()">
            来自 A：{{ store.count }}
        </button>
    </div>
</template>