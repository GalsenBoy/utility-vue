<template>
    <h1>Make auth</h1>
    <div class="container">
        <FormKit type="form">
            <FormKit type="text" name="first_name" id="first_name" label="Prénom" placeholder="Pierre"
                validation="required|length:3" />
            <FormKit type="text" name="last_name" id="last_name" label="Nom" placeholder="Dupont"
                validation="required|length:2" />
            <FormKit type="email" name="email" id="email" label="Adresse mail" placeholder="dupont@gmail.com"
                validation="required|length:6,120|email" />
            <FormKit type="password" name="password" id="password" label="Mot de passe" placeholder="****"
                validation="required|alphanumeric|length:6,120" visibility="live" />
        </FormKit>
    </div>
</template>


<script setup>
import '@formkit/themes/genesis'



</script>

<style></style>