import { supabase } from "../../../api/supabase";

import { User } from "@supabase/gotrue-js";
import { Session } from "@supabase/gotrue-js";

export const signIn = async (): Promise<{
  user: User | null;
  session: Session | null;
}> => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "github",
  });

  if (error) alert("errorが発生しました");

  return {
    user,
    session,
  };
};
