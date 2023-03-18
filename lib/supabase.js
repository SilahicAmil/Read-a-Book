import "react-native-url-polyfill/auto";

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.DB_URL,
  process.env.DB_PASSWORD
);
