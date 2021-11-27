import { supabase } from "../../../api/supabase";

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) alert("errorが発生しました");
};
