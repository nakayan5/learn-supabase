/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useState } from "react";

import { createClient } from "@supabase/supabase-js";

const options = {
  schema: "public",
  headers: { "x-my-custom-header": "my-app-name" },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
  options
);

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const onChangeEmail = useCallback((e) => setEmail(e.target.value), []);
  const onChangePw = useCallback((e) => setPw(e.target.value), []);

  const onClick = useCallback(async () => {
    const data = await supabase.auth.signUp({
      email: email,
      password: pw,
    });
  }, [email, pw]);

  return (
    <>
      <Head>
        <title>supabase pra</title>
      </Head>
      <body style={{ backgroundColor: "white", height: "100vh" }}>
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
              placeholder="username"
              className="input input-lg input-bordered bg-gray-100 text-gray-900"
              required={true}
            />
            <button className="btn btn-primary mt-10" onClick={onClick}>
              primary
            </button>
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
