<template>
  <v-app>
    <navbarComponent/>
   
    <v-snackbar
      v-model="snackbar.snackbarValue"
      :timeout="1000"
    >
      {{ snackbar.snackbarMessage }}
    </v-snackbar>
    <router-link to="/"></router-link>
    <!-- <router-link to="/about">About</router-link> -->
    <router-view/>
  </v-app>
</template>

<script setup>
import navbarComponent from "./components/navbarComponent.vue";
import { useStore } from 'vuex';
import { computed } from "vue";
const store = useStore();
const snackbar=computed(()=>{
  return store.getters.snackbar;
})
</script>