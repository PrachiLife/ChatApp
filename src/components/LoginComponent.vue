<template>
  <v-card class="mx-auto my-auto" title="User Registration" width="400">
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="firstname"
          :rules="nameRules"
          label="Your name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          required
        ></v-text-field>
      </v-container>
      <div class="text-center">
        <v-btn width="200" class="mb-5" @click="confirmSignup()">Submit</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref,defineEmits} from "vue";
import {useActions} from "vuex-composition-helpers/dist";
//import {useStore} from "vuex";
const valid = ref(false);
//const store=useStore();
 const emit = defineEmits(['closeModal']);
const { createAccount } = useActions(['createAccount']);
const firstname = ref("");
const email = ref("");
const password = ref("");
const nameRules = ref([
  (value) => {
    if (value) return true;

    return "Name is requred.";
  },
  (value) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
]);
const emailRules = ref([
  (value) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value) => {
    if (/.+@.+\..+/.test(value)) return true;
    return "E-mail must be valid.";
  },
]);
const passwordRules = ref([
  (value) => {
    if (value) return true;
    return "password is required.";
  },
  (value) => {
    if (value?.length >= 6 && value?.length <= 8) return true;
    return "Password must be from 6 to 8 characters only.";
  },
]);
const confirmSignup = async() => {
  await createAccount({ email: email.value,
      password: password.value,
      returnSecureToken:true});
      emit('closeModal');
};
</script>