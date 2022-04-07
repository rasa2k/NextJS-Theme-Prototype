import type { NextPage } from "next";
import Head from "next/head";
import Highchart from "../components/Highcharts/Highchart";

const HighchartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJS-Theme-Prototype</title>
      </Head>
      <Highchart />
    </>
  );
};

export default HighchartPage;
