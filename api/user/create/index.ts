import { createClient } from "@supabase/supabase-js";

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "my-app-name" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  options
);

export const createUser = async (email: string, pw: string) => {
  const data = await supabase.auth.signUp({
    email: email,
    password: pw,
  });

  if (data.error) {
    alert("errorが発生しました。やり直してくだいさい");
    return;
  }

  return data.user;
};
