import { createClient } from "@supabase/supabase-js";

var url = "https://fjxtxelkjdqadmvpbyer.supabase.co";
var key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYwODI2MjgxMCwiZXhwIjoxOTIzODM4ODEwfQ.oI9qcpBIl-sERmLlEIszs7tgLnNGvUmyawPIe5G_uHI";
export const supabase = createClient(url, key);
