import { supabase } from "./initSupabase";

export const SupabaseService = {
  getSession() {
    return supabase.auth.session();
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
        if (response?.user) {
          console.log(response) // <--
        }

        console.log(response.user);

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
