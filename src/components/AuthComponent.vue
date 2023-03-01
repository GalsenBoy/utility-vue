<template>
    <h1>Make auth</h1>
    <div class="form">
        <FormKit type="form" class="form" style="">
            <FormKit type="text" name="first_name" id="first_name" label="Prénom" placeholder="Pierre"
                validation="required|length:3" :validation-messages="{
                    required: `Veulliez saisir votre prénom.`,
                    length: `Veulliez saisir entre 3 et 60 caractères.`,
                }" />
            <FormKit type="text" name="last_name" id="last_name" label="Nom" placeholder="Dupont"
                validation="required|length:2" :validation-messages="{
                    required: `Veulliez saisir votre nom.`,
                    length: `Veulliez saisir entre 2 et 60 caractères.`,
                }" />
            <FormKit type="email" name="email" id="email" label="Adresse email" placeholder="dupont@gmail.com"
                validation="required|length:6,120|email" :validation-messages="{
                    required: `Veulliez saisir un adresse email.`,
                    length: `Veulliez saisir entre 6 et 12 caractères.`,
                    email: `Veulliez saisir un email correct.`,
                }" />
            <FormKit type="password" name="password" id="password" label="Mot de passe" placeholder="****"
                validation="required|alphanumeric|length:8,120|regex:/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/"
                :validation-messages="{
                    required: `Veulliez saisir votre mot de passe.`,
                    length: `Veulliez saisir entre 8 et 120 caractères.`,
                    email: `Veulliez saisir un email correct.`,
                }" />
        </FormKit>
    </div>
</template>


<script setup>
import '@formkit/themes/genesis'

</script>

<style>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>