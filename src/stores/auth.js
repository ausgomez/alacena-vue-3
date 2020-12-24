import { computed, reactive } from 'vue';
import { AuthService } from '../services/auth';


const state = reactive({
    user: null,
    isBusy: false,
    error: ''
});

const getters = reactive({
    isLoggedIn: computed(() => !!state.user)
})

const actions = {
    getUser() {
        state.isBusy = true;
        const user = AuthService.getCurrentUser(); 
        if(user == null) {
            state.error = 'No user currently logged in.';
            return;
        }

        state.user = user;

        state.isBusy = false;
    },
    async login(args) {
        try {
            state.isBusy = true;
            state.error = '';
            const response = await AuthService.login(args);

            if(response?.error) {
                state.error = response.error.message;
                state.isBusy = false;
                return;
            }

            if(response?.user) {
                state.user = response.user;
                state.error = '';
                state.isBusy = false;
                return;
            }
        } catch (e) {
            state.isBusy = false;
            state.error = e.error ?? e.message;
            state.user = null;
            console.log(e);
            return;
        }
    },
    async logout() {
        state.isBusy = true;
        state.error = '';
        state.user = {};

        const {error} = await AuthService.logout();

        if(error) {
            state.error = error;
        }

        return;
    }
}

export default { state, getters, actions };