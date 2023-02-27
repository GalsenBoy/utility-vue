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
        <p>{{ getPrice }}</p>
        <p>moi</p>
        <p>{{ convert }}</p>
        <p>{{ new_price }}</p>
    </div>
</template>
<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import axios from 'axios'
const datas = ref([]);
const devise = ref("");
const rising = ref(0);
const convert = ref("");
const exchange_array = ref([]);
const calcul = ref("");

const fetchData = () => {
    axios.get(`https://open.er-api.com/v6/latest/${devise.value}`)
        .then(function (response) {
            const rates = response.data.rates;
            datas.value = Object.entries(rates).filter(function (devise) {
                if (devise[0] === "USD" || devise[0] === "EUR" || devise[0] === "CAD" || devise[0] === "CHF" || devise[0] === "JPY" || devise[0] === "NZD" || devise[0] === "AUD" || devise[0] === "XOF" || devise[0] === "ZAR") {
                    return devise
                }
            })
        });
};

onMounted(fetchData);
watch(devise, fetchData);
watch(datas, (new_data) => {
    exchange_array.value = new_data
})
const getPrice = computed(() => {
    return exchange_array.value;
})

watch(getPrice, (new_price) => {
    for (const price of new_price) {
        if (convert.value == price[0]) {
            calcul.value = price[1] * rising.value;
        }
    }
    return calcul.value
})

const new_price = computed(() => {
    return calcul.value;
})

</script>




