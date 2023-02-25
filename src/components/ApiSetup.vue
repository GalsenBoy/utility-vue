<template>
    <p>{{ bil }}</p>
    <button @click="handelIncrement" class="btn btn-light">Incrementer</button> |
    <button class="" @click="color = color === 'red' ? 'green' : 'red'">Binding style</button>
    <p>Valeur de double {{ double }}</p>
</template>


<script setup>
import { ref, computed } from 'vue';
const bil = ref(0);
const color = ref('red')

const double = computed(() => bil.value * 2);

function handelIncrement() {
    bil.value++
}
</script>

<style>
button {
    color: v-bind(color)
}
</style>


