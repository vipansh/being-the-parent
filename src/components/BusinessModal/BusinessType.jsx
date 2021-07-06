import React from "react";
import { useForm } from "../../context/FormContext";

const BusinessType = ({ setAllDone, allDone }) => {
  const { formData, setFormData } = useForm
  
  ();

  return (
    <div className=" overflow-x-auto h-screen">
      <div className=" mx-auto w-8/12 items-center mt-20">
        <div>
          <div className="text-4xl font-bold my-4 text-gray-700">
            First Up, Choose your business type
          </div>
          <div className="my-4">
            Select a category that best describe your business and what
            customers can expect from you.
            <br />
            This will help customer find your business when they need it.
          </div>
          <div className="flex mt-6">
            <div className="mr-4 p-4 border w-72 rounded-lg  shadow-lg hover:border-4 hover:border-gray-800 cursor-pointer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 font-bold "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="font-bold my-2 text-gray-700">
                Business with GST
              </div>
              <div>
                Choose this if your're a registred business with GST
                certification
              </div>
            </div>
            <div
              className="ml-4 p-4 border w-72 rounded-lg  shadow-lg hover:border-4 hover:border-gray-800 cursor-pointer"
              onClick={() => setAllDone(true)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 font-bold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="font-bold my-2 text-gray-700">
                Small/home based business
              </div>
              <div>
                Choose this if your're running it as a small, home based setup.
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400 mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 inline text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{" "}
            You'll be required to submit relevant proofs to varify either of the
            above.
          </div>
        </div>
        {allDone && (
          <div>
            {" "}
            <hr className="my-6" />
            <div class="p-2">
              <lable class="font-bold mb-2 block" >Your PAN No.</lable>
              <input
                type="text"
                class="relative outline-none rounded-md py-3 px-3 w-full bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="panNo"
                name="name"
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                value={formData.name}
              />
            </div>
            <div class="p-2">
              <lable class="font-bold mb-2 block">Uplode File</lable>
              <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-md  flex items-center justify-between">
                <span className="w-full flex justify-center items-center">
                  Uplode file
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessType;
