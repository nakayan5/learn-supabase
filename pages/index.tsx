import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Fragment>
      <Head>
        <title>supabase pra</title>
      </Head>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          margin: "0 auto",
          justifyContent: "center",
        }}
      >
        <p
          className="label-text px-10 text-gray-600 cursor-pointer  hover:opacity-1 text-center py-10"
          onClick={() => router.push("/email")}
        >
          emailで登録
        </p>
        <p
          className="label-text px-10  text-gray-600 cursor-pointer  hover:opacity-1 text-center py-10"
          onClick={() => router.push("/github")}
        >
          githubで登録
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
