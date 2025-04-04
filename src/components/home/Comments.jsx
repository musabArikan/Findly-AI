import React from "react";
import Container from "../../containers/Container";

const Comments = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="reviews">
      <div className="mb-20 space-y-4 px-6 md:px-0">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mt-15">
          User Comments...
        </h2>
      </div>
      <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3DE"
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Will Johnson
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Mobile dev
              </p>
            </div>
          </div>
          <p className="mt-8">
            The ad posting process is very easy and fast. Thanks to AI, my ad
            reached the right people, the results are great!
          </p>
        </div>
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Jane Smith
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Marketing
              </p>
            </div>
          </div>
          <p className="mt-8">
            It has become my favorite advertising platform with its
            user-friendly interface and smart matching features.
          </p>
        </div>
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12  rounded-full object-cover"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Yanick Wilson
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Developer
              </p>
            </div>
          </div>
          <p className="mt-8">
            Thanks to AI-powered filtering, I found what I was looking for
            instantly. Searching for ads is now much more enjoyable!
          </p>
        </div>
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Jane Brown
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Mobile dev
              </p>
            </div>
          </div>
          <p className="mt-8">
            I was surprised that my ads gave results so quickly and effectively.
            AI technology really works!
          </p>
        </div>
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="user avatar"
              width="200"
              height="200"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                Andy Anderson
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Manager
              </p>
            </div>
          </div>
          <p className="mt-8">
            Both posting and finding ads are very practical. It is one step
            ahead of ordinary platforms
          </p>
        </div>
        <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww"
              alt="user avatar"
              width="400"
              height="400"
              loading="lazy"
            />
            <div>
              <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                John Taylor
              </h6>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                Mobile dev
              </p>
            </div>
          </div>
          <p className="mt-8">
            This AI-powered platform has completely changed the ad posting and
            finding process. I was very impressed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
