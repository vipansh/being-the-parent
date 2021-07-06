import React from "react";
import { useForm } from "../../context/FormContext";

const FinnalPage = ({ showFinnalPage, setShowFinnalPage }) => {
  const { formData } = useForm();

  return (
    <>
      <div
        className={` overflow-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen  h-screen bg-white transform ease-in-out duration-300  ${
          showFinnalPage ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: "52" }}
      >
        <div className="flex justify-between mt-24 w-7/12 mx-auto flex-col">
          <div>👌</div>
          <div className="text-gray-700 font-semibold text-2xl my-4">
            Greate! Your purchase was sucessful.
          </div>
          <div className="my-4">
            Your listing ${"Cubby Tales"} has been upgraded to Premium plan
            successfully. We wish you all the best for your business.
          </div>
          <div className="mt-4 text-lg font-semibold">Order details</div>
          <div className="">
            <div className="flex justifystart items-centern my-4">
              <div className="font-semibold w-48">Plan name:</div>
              <div>BeingTheParent - BizAnnual</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Order amount:</div>
              <div>Rs. 2342</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Transaction no:</div>
              <div>{formData.uniqueID}</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Date & time:</div>
              <div>20 December, 2020, Thursday 3:32PM</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Listing Name:</div>
              <div>{formData.title}</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Address:</div>
              <div>
                {formData.businessAddress} {formData.businessAres}{" "}
                {formData.businessCity}
              </div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Email:</div>
              <div>{formData.businessEmail}</div>
            </div>
            <div className="flex justify-start items-center my-4">
              <div className="font-semibold w-48">Phone No:</div>
              <div>{formData.businessPhoneNo}</div>
            </div>
          </div>
          <div className="text-gray-500 text-xs">
            We’ve sent a receipt for this to your email cubby@cubbytales.com.
            Send again.
          </div>
          <hr className="my-2" />
          <div className="my-4 grid grid-cols-3 gap-4  w-2/3 items-center">
            <button className=" col-span-2 hover:bg-gray-800 text-white font-bold py-2 px-4 border border-gray-900 rounded-md  items-center    bg-gray-900 text-xs">
              Continue updating the listing
            </button>
            <div className="text-xs underline">Go to My listing</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinnalPage;
