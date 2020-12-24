import { computed, reactive } from "vue";
import { AuthService } from "../services/auth";
import router from "../router";

const state = reactive({
  user: null,
  isBusy: false,
  error: ""
});

const getters = reactive({
  isLoggedIn: computed(() => !!state.user),
  providersEnabled: computed(() => process.env.VUE_APP_ENABLE_PROVIDERLOGIN)
});

const actions = {
  getUser() {
    state.isBusy = true;
    const user = AuthService.getSession()?.user;
    if (user == null) {
      state.error = "";
      state.isBusy = false;
      return;
    }

    state.user = user;

    state.isBusy = false;
  },
  async login(args) {
    state.isBusy = true;
    state.error = "";
    return await AuthService.login(args)
      .then(response => {
        console.log(response);
        if (response?.error) {
          state.error = response.error.message;
          state.isBusy = false;
          state.user = null;
          return response.data;
        }

        if (response?.user) {
          state.user = response.user;
          state.error = "";
          state.isBusy = false;
          router.push("/");
          return response.data;
        }
      })
      .catch(() => {
        state.error = "Invalid Email or Password";
        state.isBusy = false;
        state.user = null;
        return;
      });
  },
  async logout() {
    state.isBusy = true;
    state.error = "";
    state.user = null;

    const { error } = await AuthService.logout();

    if (error) {
      state.error = error;
    }

    router.push("/");
    return;
  }
};

export default { state, getters, ...actions };
