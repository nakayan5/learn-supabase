import React, { FC, ReactElement } from "react";
import { store } from "../../store";

// ==========================================
// View
// ==========================================
const Sample: FC = (): ReactElement => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        color: "black",
        textAlign: "center",
      }}
    >
      user: {store.getState().sample.name}
    </div>
  );
};

export default Sample;
