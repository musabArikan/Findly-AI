import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>

        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 text-balance dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Smart Ads, Smart Choices!{" "}
              <span className="text-primary dark:text-white"></span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Our AI-powered advertising platform intelligently matches the most
              suitable ads to your needs. Discover the right opportunities with
              a fast, reliable, and personalized experience. Whether you want to
              post or find ads, the future of advertising is here!
            </p>
            <div
              className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6 cursor-pointer"
              onClick={() => navigate("AIOne")}
            >
              <a className="relative flex h-11 w-full items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max px-24 py- ">
                <span className="flex items-center gap-2 text-2xl relative font-semibold text-white">
                  <FaPlus className="pt-1 mb-1" />
                  Post Ad
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text:white">
                  Free!
                </h6>
                <p className="mt-2 text-gray-500">Make no payments</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text:white">
                  Publish your ad now!
                </h6>
                <p className="mt-2 text-gray-500">Don't get lost in thoughts</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text:white">
                  Don't waste time!
                </h6>
                <p className="mt-2 text-gray-500">
                  Set aside time for yourself
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="text-center text-2xl mt-15 mb-5 ">
              The Technologies We Use
            </h1>
          </div>

          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/avatars/bad39985-c1ef-4f11-8812-3d6c8e05bbf0_removalai_preview.png"
                className="h-12 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/clients/google-cloud.svg"
                className="h-12 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/clients/google.svg"
                className="h-10 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/clients/gemini.png"
                className="h-12 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/avatars/tailwindcss-smartastudio.png"
                className="h-25 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0 flex items-center justify-center">
              <img
                src="/images/avatars/89ac0ce6-555d-43b1-92db-8a0edbe326da_removalai_preview.png"
                className="h-12 w-auto object-contain"
                loading="lazy"
                alt="client logo"
              />
            </div>
          </div>
          <hr className="bg-gray-500 mt-8 mb-20"></hr>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
