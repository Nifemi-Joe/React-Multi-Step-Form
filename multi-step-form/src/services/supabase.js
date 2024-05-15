
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rphtmxqpaizsbbxnygrsss.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmddddFzZSIsInJlZiI6InJwaHRteHFwYWl6c2JieG55Z3JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDA0MjUsImV4cCI6MjAzMDA3NjQyNX0.svM0P17vE-PrYl8Jh1T_TYhyipr5kIlll8A5MJlfwKM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
