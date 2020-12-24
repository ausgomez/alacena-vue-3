import { createClient } from "@supabase/supabase-js";

var url = "";
var key = "";
export const supabase = createClient(url, key);
