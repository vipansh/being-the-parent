import React from "react";

const ModalNavBar = ({ itemNo, setItemNo }) => {
  return (
    <aside className="m-4 px-4">
      <div className="mb-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-yellow-800 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <div className="my-4 font-bold text-2xl">Hello</div>
      <div className="my-4 mb-8">
        Tell us a bit about your business, so that we can help you create a
        perfect listing
      </div>
      <div className="flex justify-center items-center flex-col">
        <div
          onClick={() => setItemNo(1)}
          className={`py-1 px-3 w-full flex items-center mx-8 my-1 rounded-xl   ${
            itemNo === 1 ? "bg-blue-900 text-gray-50" : "text-gray-500"
          }`}
        >
          Business Type
        </div>
        <div
          className={`py-1 px-3 w-full flex items-center mx-8 my-1 rounded-xl  ${
            itemNo === 2 ? "bg-blue-900 text-gray-50" : "text-gray-500"
          }`}
        >
          Category
        </div>
        <div
          className={`py-1 px-3 w-full flex items-center mx-8 my-1 rounded-xl  ${
            itemNo === 3 ? "bg-blue-900 text-gray-50" : "text-gray-500"
          }`}
        >
          Title & Picture
        </div>
        <div
          className={`py-1 px-3 w-full flex items-center mx-8 my-1 rounded-xl  ${
            itemNo === 4 ? "bg-blue-900 text-gray-50" : "text-gray-500"
          }`}
        >
          Contact & location
        </div>
      </div>
      <div class="flex flex-col  justify-end h-72">
Exit
      </div>
    </aside>
  );
};

export default ModalNavBar;
