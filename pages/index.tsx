import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeadFile from "../components/head-file";
import { SEOConfig } from "../configs/global_variables";

const Home: NextPage = () => {
  return (
    <>
      <HeadFile title={`${SEOConfig.title}`} />
    </>
  );
};

export default Home;
