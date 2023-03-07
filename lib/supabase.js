import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kjmzotdxzgbidcppxrgb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqbXpvdGR4emdiaWRjcHB4cmdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgwNzAxMjIsImV4cCI6MTk5MzY0NjEyMn0.Yl-KG9KwxfoF8VQelPpwk-Z-QTrIfi1vJPSu6DtdYKc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {});
