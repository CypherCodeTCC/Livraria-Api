import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.supabaseURL!,
  process.env.supabaseKEY!,
);

export default supabase;
