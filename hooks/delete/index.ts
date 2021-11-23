import { supabase } from "../../api/supabase";

export const deleteUser = async () => {
  const res = await supabase.auth.api.deleteUser(
    "APIkeyが入ります",
    "service-role-keyが入ります"
  );

  if (res.error) {
    alert("errorが発生しました。やり直してくだいさい");
    return;
  }

  return res.data;
};
