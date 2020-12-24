import { supabase } from "./initSupabase";

export const AuthService = {
  getSession() {
    return JSON.parse(localStorage.getItem('supabase.auth.token')).currentSession;
  },

  getCurrentUser() {
    return supabase.auth.user();
  },

  async refreshSession() {
    return await supabase.auth.refreshSession();
  },

  async login(args) {
    const { email, password, provider } = args;

    return await supabase.auth
      .signIn({
        email,
        password,
        provider
      })
      .then((response) => {
        return response.data;
      });
  },

  async logout() {
    const { error } = supabase.authl.signOut();

    if (error) {
      throw error;
    }
  }
};
