/* eslint-disable @next/next/no-img-element */
import React, { FC, ReactElement } from "react";

// ==========================================
// View
// ==========================================
const State: FC = (): ReactElement => {
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <div className="mx-auto py-10 w-96">
        <div className="card-body text-center text-gray-900">成功です</div>
      </div>
    </div>
  );
};

export default State;
