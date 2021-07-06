import React, { useState, useEffect } from "react";

const AllDoneModal = ({ showModal, setShowModal, setShowPaymentPage }) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (event.target.id !== "outsideClickRef") {
        return;
      }
      setShowModal(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [setShowModal]);

  return (
    <div
      id="outsideClickRef"
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-20 outline-none focus:outline-none w-screen h-screen transform ease-in-out duration-300  bg-gray-100 bg-opacity-25 text-gray-700"
    >
      <div className="  my-6 mx-auto w-1/2 flex justify-center items-center">
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-2xl ">
          <div className=" flex items-center justify-between p-5 border-b border-solid bg-white rounded-t">
            <h3 className="text-1xl font-bold  text-gray-800 w-full flex justify-center">
              Yay, Nice Work
            </h3>
            <button
              className="p-1  text-black  block text-3xl leading-none font-semibold outline-none focus:outline-none  opacity-60"
              onClick={() => setShowModal(false)}
            >
              x
            </button>
          </div>
          {/*body*/}
          <div className="  items-center flex flex-col justify-center  w-3/5 mx-auto">
            <div className="m-4 text-9xl">💸</div>
            <div>
              <span className="mx-2 font-bold  text-3xl">
                Your basic listing is ready.
              </span>
            </div>
            <div className="my-2 text-center  text-sm font-medium leading-relaxed">
              We're reviewing it once and will publish it live on the portal, if
              all good. Meanwhile would you like to upgrade this to a premium
              plan?
            </div>
            <div class="mt-4 ">
              <button
                onClick={() => setShowPaymentPage(true)}
                class="btn-hover color-1 px-8 py-2"
              >
                Explore Premium Plan
              </button>
            </div>
            <div className="my-2 underline font-semibold">Maybe latter</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDoneModal;
