import React from "react";
import { useForm } from "../../context/FormContext";

const ContactAndLocation = ({ setAllDone, allDone }) => {
  const { formData, setFormData } = useForm();

  return (
    <div className=" overflow-x-auto h-screen">
      <div className=" mx-auto w-8/12 items-center mt-20">
        <div className="text-4xl font-bold my-4 text-gray-700">
          Contaxt & Location
        </div>
        <div>
          <div class="my-2">
            <div className="font-bold text-gray-700 my-4">
              Business phone No and Email
            </div>
            <input
            name="businessPhoneNo"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.businessPhoneNo}
              type="text"
              class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Business Phone No"
            />
          </div>
          <div class="my-2">
            <input
             name="businessEmail"
             onChange={(e) => {
               setFormData({ ...formData, [e.target.name]: e.target.value });
             }}
             value={formData.businessEmail}
              type="text"
              class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Business Email"
            />
          </div>
        </div>
        <hr />
        <div class="my-2">
          <div className="font-bold text-gray-700 my-4">
            Which city are you operating in?
          </div>
          <input
            onFocus={() => setAllDone(true)}
            name="businessPin"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.businessPin}
            type="text"
            class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
            placeholder="Enter Pin"
          />
          <span className=" text-gray-500 text-xs  w-9/12  flex justify-start my-3  ">
            <span className="text-gray-600 mr-1 font-semibold">Greate :</span>{" "}
            We are serving in your city
          </span>
        </div>

        {allDone && (
          <div>
            <div class="my-2">
              <div className="font-bold text-gray-700 my-4">
                Address Details
              </div>
              <input
               name="businessAddress"
               onChange={(e) => {
                 setFormData({ ...formData, [e.target.name]: e.target.value });
               }}
               value={formData.businessAddress}
                type="text"
                class="relative outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="E.g. 13th Main, 6th Cross, Near Metro Station"
              />
            </div>
            <div class="my-2 flex ">
              <input
              name="businessAres"
              onChange={(e) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData.businessAres}
                type="text"
                class="relative  outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="Area"
              />
              <input
               name="businessCity"
               onChange={(e) => {
                 setFormData({ ...formData, [e.target.name]: e.target.value });
               }}
               value={formData.businessCity}
                type="text"
                class="relative mx-4 outline-none rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="City"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactAndLocation;
