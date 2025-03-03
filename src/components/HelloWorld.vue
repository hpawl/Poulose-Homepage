<script setup lang="ts">
    import { ref } from 'vue';
    defineProps<{ msg: string }>()
    const lang = ref("Vue")
</script>

<template>
    <h1>{{ msg }}</h1>
    <p>This is my first website in {{ lang }}!!</p>
</template>

<style>
</style>