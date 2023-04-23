<template>
  <LoginComponent />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import LoginComponent from '../components/LoginComponent.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    LoginComponent,
  },
});
</script>
