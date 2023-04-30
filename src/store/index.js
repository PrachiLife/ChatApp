import { createStore } from 'vuex'
import axios from 'axios';
export default createStore({
  state: {
    snackbar: { snackbarValue: false, snackbarMessage: "" },
    isLogin: false,
  },
  getters: {
    snackbar: (state) => {
      return state.snackbar;
    },
    isLogin:(state)=>{
      return state.isLogin;
    }
  },
  mutations: {
    CREATE_ACCOUNT(state, payload) {
      console.log("state", state, "payload", payload);
      if (payload.status == 200) {
        state.snackbar.snackbarValue = true;
        state.snackbar.snackbarMessage = "You are signned in successfully!!";
      }
    },
    SNACKBAR_MESSAGE(state, payload) {
      state.snackbar.snackbarValue = true;
      state.snackbar.snackbarMessage = payload;
    }
  },
  actions: {
    createAccount({ commit }, payload) {
      axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfvm3Ei0dqH_k0TUAxTQlHkghPaL-oiXU", payload).then(
        (response) => {
          if (response.status == 200) {
            commit("CREATE_ACCOUNT", response);
          }
        },
      ).catch(() => {
        commit("SNACKBAR_MESSAGE", "Sign in not done.Please Signup again!!");
      });
    }
  },
  modules: {
  }
})
