<template>
  <v-main class="bg-image d-flex justify-center align-center">
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
          min-width=150
        >
        Sign Up
        </v-btn>
      </template>
      <loginComponent :dialog="dialog"/>
    </v-dialog>
  </div>
  </v-main>
</template>
<script setup>
import {ref} from "vue";
import loginComponent from "../components/loginComponent.vue"
const dialog=ref(false);
</script>
<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.6)
    ),
    url(../assets/chatBg.jpg);
}
</style>