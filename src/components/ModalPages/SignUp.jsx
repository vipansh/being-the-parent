import React, { useState } from "react";
import { useForm } from "../../context/FormContext";

const SignUp = ({ setShowModal, setModalOpenId }) => {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    passwordError: false,
  });
  return (
    <div className="  my-6 mx-auto w-2/6 flex justify-center items-center">
      <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-2xl">
        <div className="w-full flex items-center justify-between p-5 border-b border-solid border-blue-200 rounded-t">
          <button
            className="p-1  text-black  block text-3xl leading-none font-semibold outline-none focus:outline-none  opacity-60"
            onClick={() => setShowModal(false)}
          >
            ×
          </button>
          <h3 className="text-1xl font-bold   w-full flex justify-center">
            Sign Up for free business account
          </h3>
        </div>
        {/*body*/}
        <div className="mx-4  items-center">
          <div className="m-4">
            👋 <span className="mx-2 font-bold">Hey!</span>
          </div>
          <div class="p-2">
            <input
              type="text"
              class="relative outline-none rounded-md py-3 px-3 w-full bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Your Name"
              name="name"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.name}
            />
            {errors.nameError && (
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
                Name is required
              </div>
            )}
          </div>
          <div class="p-2">
            <input
              type="text"
              class="relative outline-none rounded-md py-3 px-3 w-full bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Email"
              name="email"
              onChange={(e) => {

                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.email}
            />
            {errors.emailError && (
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
                Email is required
              </div>
            )}
          </div>
          <div class="p-2">
            <input
              type="password"
              class="relative outline-none rounded-md py-3 px-3 w-full bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="password"
              name="password"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.password}
            />
            {errors.passwordError && (
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
                Password can't be empty
              </div>
            )}
          </div>

          <div class="p-2 my-4">
            <button
              onClick={() => {
                let valid = true;
                let error = { ...errors };
                if (formData.name.trim() === "") {
                  valid = false;
                  error = { ...error, nameError: true };
                }
                if (formData.email.trim() === "") {
                  valid = false;
                  error = { ...error, emailError: true };
                }
                if (formData.password.trim() === "") {
                  valid = false;
                  error = { ...error, passwordError: true };
                }
                setErrors(error);
                console.log(errors);
                if (valid) setModalOpenId(2);
              }}
              class="hover:bg-blue-900 text-white    btn-hover color-1 font-bold py-2 px-4 border border-indigo-700 rounded-md w-full items-center  "
            >
              Create My Account
            </button>
          </div>
          <div className="fancy">
            <span>or</span>
          </div>
          <div class="p-2 my-4">
            <button class="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-md w-full flex items-center justify-between">
              <svg viewBox="0 0 48 48" className="h-4 w-4 ">
                <clipPath id="g">
                  <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                </clipPath>
                <g class="colors" clip-path="url(#g)">
                  <path fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                  <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                  <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                </g>
              </svg>
              <span className="w-full flex justify-center items-center">
                Continue with Goolge
              </span>
            </button>
          </div>
          <div class="p-2 my-4">
            <div className="flex justify-center items-center">
              Already have an account?{" "}
              <span className="text-indigo-600 mx-2">LogIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
