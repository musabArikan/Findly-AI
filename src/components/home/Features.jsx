import React from "react";
import Container from "../../containers/Container";

const Features = () => {
  return (
    <div id="features">
      <div className="md:w-2/3 lg:w-159">
        <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          Don't spend long minutes to post an ad!
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Send your product information to artificial intelligence by filling
          out the form on the screen. It will organize your information, write
          the description for you, and present it to you. If you approve, your
          product will be on sale in seconds. Don't have to wait long to publish
          your ad.
        </p>
      </div>
      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Fast
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                A much faster and easier way than classic ad posting methods.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            ></a>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Innovative
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Without thinking about what to write in the description, let
                artificial intelligence write it for you.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            ></a>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                State of the art
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Take advantage of the latest technological possibilities and get
                the best service.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            ></a>
          </div>
        </div>
        <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
          <div className="relative space-y-8 py-12 p-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
              className="w-12"
              width="512"
              height="512"
              alt="burger illustration"
            />

            <div className="space-y-2">
              <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                Save time
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Instead of spending your time posting ads, focus on your
                products.
              </p>
            </div>
            <a
              href="#"
              className="flex items-center justify-between group-hover:text-secondary"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
