// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   "https://hjsmhuupbsquatkbnssn.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21odXVwYnNxdWF0a2Juc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDE2MzAsImV4cCI6MjAyNzM3NzYzMH0.sjJfLG0OGzaFzFywI-eFt160YtDzuZSt2qsrg07cLsk"
// );

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hjsmhuupbsquatkbnssn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21odXVwYnNxdWF0a2Juc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDE2MzAsImV4cCI6MjAyNzM3NzYzMH0.sjJfLG0OGzaFzFywI-eFt160YtDzuZSt2qsrg07cLsk";

export const supabase = createClient(supabaseUrl, supabaseKey);
