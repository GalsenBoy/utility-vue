<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <nav>
    <router-link to="/"><button class="btn btn-info">Accueil</button></router-link> |
    <router-link to="/echange"><button class="btn btn-success">Echange de monnaie</button></router-link> |
    <router-link to="/auth"><button class="btn btn-warning">S'authentifier</button></router-link>

  </nav>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
