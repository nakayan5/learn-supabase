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
      <div style={{ height: "100vh", backgroundColor: "white" }}>
        <p
          className="label-text text-gray-600 cursor-pointer  hover:opacity-1 text-center py-10"
          onClick={() => router.push("/email")}
        >
          emailで登録
        </p>
        <p
          className="label-text text-gray-600 cursor-pointer  hover:opacity-1 text-center py-10"
          onClick={() => router.push("/github")}
        >
          githubで登録
        </p>
      </div>
    </Fragment>
  );
};

export default Home;
