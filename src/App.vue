<template>
  <v-app>
    <navbarComponent/>
    <router-link to="/"></router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-view/>
  </v-app>
</template>

<script setup>
import navbarComponent from "./components/navbarComponent.vue";
</script>