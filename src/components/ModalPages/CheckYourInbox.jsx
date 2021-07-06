import React, { useState, useEffect } from "react";
import { useForm } from "../../context/FormContext";

const CheckYourInbox = ({ setModalOpenId }) => {
  const { formData } = useForm();

  const [isEmailSent, setIsEmailSent] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsEmailSent(true);
    }, 1000);
  }, []);
  return (
    <div className="  my-6 mx-auto w-2/6 flex justify-center items-center">
      <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-2xl">
        <div className="w-full flex items-center justify-between p-5 border-b border-solid border-blue-200 rounded-t">
          <button
            className="p-1  text-black  block text-3xl leading-none font-semibold outline-none focus:outline-none  opacity-60"
            onClick={() => setModalOpenId(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h3 className="text-1xl font-bold  text-gray-800 w-full flex justify-center">
            Check your inbox
          </h3>
        </div>
        {/*body*/}
        <div className="p-4">
          <div className="p-2">
            {!isEmailSent ? (
              <span className="text-xl text-gray-800">
                <span className="mr-2">✉ </span>Check your inbox
              </span>
            ) : (
              <span className="text-xl text-gray-800">
                <span className="mr-2">👍</span>You are In!
              </span>
            )}{" "}
          </div>
          <div className=" p-2 my-2">
            We just sent and email to <b>{formData.email}</b> Click on the link
            to continue. The email can take upto 3 minuts to arrive
          </div>
          <div className="p-2">
            Nothing yet? <span className="underline">Get a new mail.</span>
          </div>
          <div class="p-2 my-2">
            <button
              onClick={() => {
                setModalOpenId(3);
              }}
              class={` hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-900 rounded-md w-full items-center ${
                !isEmailSent ? "opacity-5" : "bg-gray-900"
              } `}
              disabled={!isEmailSent}

            >
              { !isEmailSent ? "Sending Mail..." : "Continue"}
            </button>
          </div>
          <div className="px-2 flex justify-start">
            <div className=" mr-8">Open Gmail</div>
            <div className=" ml-8">Open Outlook</div>
          </div>
          <div class="p-2 my-4">
            Having a problem? <span className="underline">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckYourInbox;
