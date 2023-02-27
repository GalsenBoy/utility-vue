<template>
    <h1 class="mt-2">Exchanges</h1>
    <div class="container" style="width:400px">
        <select class="form-select" name="pets" id="pet-select" v-model="devise">
            <option value=""> Choisir une devise </option>
            <option value="USD">Dollar américain</option>
            <option value="EUR">Euro</option>
            <option value="NZD">Dollar néo-zélandais</option>
            <option value="CAD">Dollar canadien</option>
            <option value="CHF">Franc suisse</option>
            <option value="AUD">Dollar australien</option>
            <option value="JPY">Yen</option>
            <option value="XOF">Franc-CFA</option>
            <option value="ZAR">Rand sud-africain</option>
        </select>
        <label for="">Le montant à échanger :</label>
        <input type="text" name="" id="" v-model="rising">
    </div>
    <div class="container" style="width:400px">
        <select class="form-select" name="pets" id="pet-select" v-model="convert">
            <option value=""> Choisir la devise à recevoir</option>
            <option value="USD">Dollar américain</option>
            <option value="EUR">Euro</option>
            <option value="NZD">Dollar néo-zélandais</option>
            <option value="CAD">Dollar canadien</option>
            <option value="CHF">Franc suisse</option>
            <option value="AUD">Dollar australien</option>
            <option value="JPY">Yen</option>
            <option value="XOF">Franc-CFA</option>
            <option value="ZAR">Rand sud-africain</option>
        </select>
        <p>{{ new_price }}</p>
    </div>
</template>
  
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios'

const devise = ref("");
const rising = ref(0);
const convert = ref("");
const exchange_rates = ref({});

const fetchData = () => {
    axios.get(`https://open.er-api.com/v6/latest/${devise.value}`)
        .then(function (response) {
            exchange_rates.value = response.data.rates;
        });
};

onMounted(fetchData);
watch(devise, fetchData);

const new_price = computed(() => {
    if (!convert.value) {
        return "";
    }
    const exchange_rate = exchange_rates.value[convert.value];
    if (!exchange_rate) {
        return "";
    }
    return exchange_rate * rising.value;
});

</script>
  