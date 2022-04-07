import type { NextPage } from "next";
import Head from "next/head";
import LoginPanel from "../components/Login/LoginPanel";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS-Theme-Prototype</title>
      </Head>
      <LoginPanel />
    </>
  );
};

export default HomePage;
