import React from "react";

export function CloseFriendCard() {
  return (
    <>
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-black dark:border-gray-700 dark:hover:bg-gray-700  min-w-[250px]"
      >
        <div className="grid grid-cols-6 ">
          <div className="col-span-5 wrap break-words">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Name
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Status
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Day's P&L:
            </p>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-5.jpg"
                alt=""
              />
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
