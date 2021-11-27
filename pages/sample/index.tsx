import React, { FC, ReactElement, useCallback, useMemo } from "react";
import { store } from "../../store";
import { useDispatch } from "react-redux";
import { createSampleAction } from "../../actions/sample";

// ==========================================
// View
// ==========================================
const Sample: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const onClick = useCallback(() => {
    dispatch(createSampleAction("create", "nakamura"));
  }, [dispatch]);

  const name = useMemo(() => store.getState().sample.name, []);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        color: "black",
        textAlign: "center",
      }}
    >
      <p>user: {name}</p>
      <p onClick={onClick} style={{ color: "wheat", cursor: "pointer" }}>
        上書き
      </p>
    </div>
  );
};

export default Sample;
