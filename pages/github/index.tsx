import { User } from "@supabase/gotrue-js";
import React, { FC, ReactElement, useCallback } from "react";

import { signIn } from "../../hooks/auth/signin";
import { signOut } from "../../hooks/auth/signout";

// ==========================================
// View
// ==========================================
const Github: FC = (): ReactElement => {
  const onSingIn = useCallback(async () => {
    const { user, session } = await signIn();
    console.log(user, session);
  }, []);

  const onSignOut = useCallback(async () => {
    await signOut();
  }, []);

  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div className={"container mx-auto p-10"}>
        <h1 className={"font-mono text-gray-900 text-center pb-10"}>
          supabase pra
        </h1>
        <div className="form-control mx-40">
          <button className="btn btn-primary mt-10" onClick={onSingIn}>
            signin
          </button>
          <button className="btn btn-primary mt-10" onClick={onSignOut}>
            signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Github;
