import React from "react";
import { useForm } from "../../context/FormContext";

const TitleAndPicture = ({setAllDone}) => {
  const { formData, setFormData } = useForm();

  return (
    <div className=" overflow-x-auto h-screen">
      <div className=" mx-auto w-8/12 items-center mt-20">
        <div className="text-4xl font-bold my-4 text-gray-700">
          Give your listing a nice title & picture
        </div>
        <div class="my-4">
          <div className="font-bold text-gray-700 my-4">
            What is the title of your listing?
          </div>
          <div class=" relative pb-9">
            <input
            onFocus={()=>setAllDone(true)}
            name="title"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.title}
              type="text"
              class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="E.g. Sudhakar.s Gutar Class for Teens"
            />
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
                Give Your lsiting a short but descriptive title. It may or may
                not be the same as your business name.
              </div>
            </span>
          </div>
        </div>
        <hr />
        <div>
          <div className="font-bold text-gray-700 my-4">
            Upload a display picture
          </div>
          <div>
            This picture will be userd in the search results. It's important
            that it's clear and communicates your brand well.
          </div>
          <div>
            <div class="p-2">
              <button class="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded-md  flex items-center justify-between">
                <span className="w-full flex justify-center items-center">
                  Uplode picture
                </span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="font-bold text-gray-700 my-4">
            Upload a display picture
          </div>
          <div>
            This picture will be userd in the search results. It's important
            that it's clear and communicates your brand well.
          </div>
          <div>
            <div className="flex">
              <div className=" border p-4 border-gray-500 rounded-lg w-40">
                  <div className="text-3xl text-red-500">♥</div>
                <div className="font-semibold  text-sm">
                  Mompreneur
                </div>
              </div>
              <div className="mx-8 border p-4 border-gray-300 rounded-lg  w-40">
                <div className="text-3xl">🏠</div>

                <div className="font-semibold  text-sm"> Home based small biz</div>
              </div>
              <div className=" border p-4 border-gray-300 rounded-lg  w-40">
                <div className="text-3xl">🦆</div>

                <div className="font-semibold  text-sm"> Aspiring enterpreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAndPicture;
