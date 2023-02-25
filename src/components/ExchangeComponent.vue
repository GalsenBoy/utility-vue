<template>
    <h1 class="mt-2">Exchanges {{ bil }}</h1>
    <input type="text" v-model="devise">
    <div v-for="(data, index) in datas" :key="index">
        <div>{{ data.currency }}: {{ data.rate }}</div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios'
const datas = ref([]);
const devise = ref("");

const fetchData = () => {
    axios.get(`https://open.er-api.com/v6/latest/${devise.value}`)
        .then(function (response) {
            const rates = response.data.rates;
            datas.value = Object.entries(rates).map(([currency, rate]) => ({ currency, rate }));
        });
};

onMounted(fetchData);
watch(devise, fetchData); 
</script>




