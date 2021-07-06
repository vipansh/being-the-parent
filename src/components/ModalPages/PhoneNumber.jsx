import React, { useState } from "react";
import { useForm } from "../../context/FormContext";

const PhoneNumber = ({ setModalOpenId }) => {
  const { formData, setFormData } = useForm();
  const [phoneError, setPhoneError] = useState(false);

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
            Verify your phone no
          </h3>
        </div>
        {/*body*/}
        <div className="p-4">
          <div className="p-2">
            {/* header */}
            Your Phone no, please.
          </div>
          <div class="p-2 my-2">
            Enter your phone number, so that we know it,s realy you and not your
            evil twin. Also we will send you update about listing on this phone
            no.
          </div>
          <div class="p-2 ">
            <input
              type="number"
              class="relative outline-none rounded-md py-3 px-3 w-full bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Phone no"
              name="phoneNo"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.phoneNo}
            />
            {phoneError ? (
              <div className="text-red-600 text-xs my-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 inline mr-2"
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
                  </svg>
                </span>
                Phone No is required
              </div>
            ) : (
              <span className="block text-gray-500 text-xs my-1">
                We'll send you and OTP to this no.
              </span>
            )}
          </div>
          <div class="p-2 my-2">
            <button
              onClick={() => {
                let valid = true;
                if (formData.phoneNo.trim() === "") {
                  valid = false;
                  setPhoneError(true);
                }
                if (valid) setModalOpenId(4);
              }}
              class="hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-900 rounded-md w-full items-center    bg-gray-900"
            >
              Continue
            </button>
          </div>

          <div class="p-2 my-4 text-gray-600">
            Having a problem? <span className="underline">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
