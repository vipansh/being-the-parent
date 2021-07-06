import React, { useState } from "react";

const BusinessCategory = ({ setAllDone, allDone }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className=" overflow-x-auto h-screen">
      <div className=" mx-auto w-8/12 items-center mt-20">
        <div className="text-4xl font-bold my-4 text-gray-700">
          Whats your business category?
        </div>
        <div className="my-4 text-sm">
          Select a category that best descrives your business and what customers
          can expect from you.
          <br />
          This will help customers find your business when they need it.
        </div>
        <div class=" relative pb-9">
          <input
            onFocus={() => {
              setShowSearch(true);
              setAllDone(true);
            }}
            onBlur={() => {
              setShowSearch(false);
            }}
            type="text"
            class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
            placeholder="Type in your category you are looking for"
          />
          {showSearch && (
            <div className="absolute  left-0 bottom-1/3 w-9/12  p-2 border  rounded-lg  shadow-lg hover:border-4 hover:border-gray-800 cursor-pointer bg-white z-20">
              Search For
            </div>
          )}
          <span className=" text-gray-500 text-xs  w-9/12  flex justify-start  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 block text-blue-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            <div>
              Select a specific category that you want to focus on E.g.Gutar
              class(not music class).This improves your listing's performance.
            </div>
          </span>
        </div>
        <hr />
        <div className="my-4">
          <div className="font-bold text-gray-700 my-4">
            Which parenting group is your listing is most suitable for?
            (optional)
          </div>
          <div className="flex flex-wrap">
            <div className="px-4 py-2 bg-gray-800  rounded-lg text-gray-50">
              Planing for baby +
            </div>
          </div>
        </div>
        <hr />
        <div className="font-bold text-gray-700 my-4">
          Do you want to add some tags?(Optional)
        </div>
        <div class=" relative mb-4">
          <input
            type="text"
            class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
            placeholder="E.g. Classical, Jazz, Hindustani(seperate tags with comma)"
          />
        </div>
        <div className="flex">
          <div className=" px-2 py-1 border-2 border-gray-500 rounded-3xl">
            Pasta{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 inline text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="mx-4 px-2 py-1 border-2 border-gray-500  rounded-3xl">
            Vegin{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 inline text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCategory;
