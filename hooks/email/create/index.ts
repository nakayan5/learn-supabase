import { supabase } from "../../../api/supabase";

export const createUser = async (email: string, pw: string) => {
  const res = await supabase.auth.signUp({
    email: email,
    password: pw,
  });

  if (res.error) {
    alert("errorが発生しました。やり直してくだいさい");
    return;
  }

  return res.user;
};
