import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HeadFile from "../components/head-file";
import { SEOConfig } from "../configs/global_variables";

import bgImage from "../public/img/bg-art.jpg";

const Home: NextPage = () => {
  return (
    <>
      <HeadFile title={`${SEOConfig.title}`} />
      <div className="bg-background flex justify-center items-center w-full min-h-screen px-4 md:px-0">
        <div className="flex flex-row bg-white w-full max-w-5xl rounded-lg">
          {/* remove height when done */}
          <div className="md:w-2/5 hidden md:block p-12 relative">
            <Image
              className="rounded-l-lg"
              src={bgImage}
              layout="fill"
              alt="Background Art"
              objectFit="cover"
              // placeholder="blur"
              quality={100}
            />

            <h1 className="text-gray-100 relative z-10 text-6xl font-bold leading-relaxed">
              {" "}
              Go where you feel most alive{" "}
            </h1>
          </div>
          <div className="md:w-3/5 p-6 md:p-12 space-y-8">
            <div className="flex justify-end">
              <Image src="/img/logo.png" layout="fixed" width={64} height={64} alt="Logo" />
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-semibold text-gray-600">
                Welcome to <span className="text-primary-dark font-bold">Dark Slab</span>{" "}
              </h1>
              <p className="text-gray-500">
                {" "}
                Discover easy, family-friendly activities for enjoying the outdoors, no matter where you are.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
