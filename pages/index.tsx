import type { NextPage } from "next";
import Head from "next/head";
import { ChangeEvent, Fragment, useCallback, useState } from "react";
import { User } from "@supabase/gotrue-js";
import { createUser } from "../hooks/email/create";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { signIn } from "../hooks/auth/signin";
import { signOut } from "../hooks/auth/signout";

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const onChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  );
  const onChangePw = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPw(e.target.value),
    []
  );

  const onClick = useCallback(async () => {
    const res: User | null | undefined = await createUser(email, pw);
    if (!res) return;
    dispatch({ type: "create", payload: res });
    router.push("/state");
  }, [dispatch, email, pw, router]);

  const onSingIn = useCallback(async () => {
    const { user, session } = await signIn();
    console.log(user, session);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>supabase pra</title>
      </Head>
      <div style={{ backgroundColor: "white", height: "100vh" }}>
        <div className={"container mx-auto p-10"}>
          <h1 className={"font-mono text-gray-900 text-center pb-10"}>
            supabase pra
          </h1>
          <div className="form-control mx-40">
            <label className="label">
              <span className="label-text text-gray-600">email</span>
            </label>
            <input
              value={email}
              onChange={onChangeEmail}
              type="text"
              placeholder="username"
              className="input input-lg input-bordered bg-gray-100 text-gray-900"
              required={true}
            />
            <label className="label">
              <span className="label-text text-gray-600">password</span>
            </label>
            <input
              value={pw}
              onChange={onChangePw}
              type="text"
              placeholder="password"
              className="input input-lg input-bordered bg-gray-100 text-gray-900"
              required={true}
            />
            <button className="btn btn-primary mt-10" onClick={onClick}>
              送信
            </button>

            <button className="btn btn-primary mt-10" onClick={onSingIn}>
              signin
            </button>
            <button className="btn btn-primary mt-10" onClick={signOut}>
              signout
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
