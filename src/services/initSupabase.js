import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.VUE_APP_SUPABASE_ENDPOINT, process.env.VUE_APP_SUPABASE_KEY);
