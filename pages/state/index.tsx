/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactElement } from "react";

import { useSelector } from "react-redux";
import { TUserState } from "../../reducers/user";

// ==========================================
// View
// ==========================================
const State: FC = (): ReactElement => {
  const test = useSelector<TUserState, TUserState["user"]>(
    (state) => state.user
  );

  console.log("useSelectで呼び出してます", test);

  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div className="mx-auto py-10 w-96">
        <div className="card-body text-center text-gray-900">成功です</div>
      </div>
    </div>
  );
};

export default State;
