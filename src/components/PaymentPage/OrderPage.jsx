import React from "react";

const OrderPage = ({ showOrderPage,setShowFinnalPage }) => {
  return (
    <>
      <div
        className={` overflow-auto fixed inset-0 z-50 outline-none focus:outline-none w-screen  h-screen bg-white transform ease-in-out duration-300  ${
          showOrderPage ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: "51" }}
      >
        <nav>Logo</nav>
        <div className="grid grid-cols-10 gap-4 mt-24 w-7/12 mx-auto">
          <div className="flex justify-center flex-col w-full  items-start col-span-6">
            <div className="text-gray-700 font-semibold text-3xl mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>{" "}
              Confirm & pay
            </div>
            <div className="text-gray-700 font-semibold text-xl my-2">
              Plan: Premium Annual
            </div>
            <div className="text-gray-700 font-semibold  text-base my-2">
              Payable amount: Rs 2,345{" "}
            </div>
            <hr className="w-full text-gray-900" />
            <div className="text-gray-700 font-semibold text-xl my-4">
              Got a discount coupne?
            </div>
            <div className="flex my-4">
              <input
                type="text"
                class="relative outline-none  rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="Enter coupon code here"
              />
              <button
                className="bg-gray-300 text-white  px-8 py-2  mx-4 rounded-full"
                disabled
              >
                Apply
              </button>
            </div>
            <hr className="w-full text-gray-900" />
            <div className="text-gray-700 font-semibold text-xl my-4">
              Billing address
            </div>
            <input
              type="text"
              class="relative outline-none my-4 rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="Billing Name"
            />
            <input
              type="text"
              class="relative outline-none my-4 rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="E.g. 13th Main, 6th Cross, Near Metro Station"
            />
            <input
              type="text"
              class="relative outline-none my-4 rounded-md py-3 px-3 w-9/12 bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
              placeholder="City"
            />
            <div className="grid grid-cols-2 gap-4 w-9/12">
              <input
                type="text"
                class="relative outline-none mr-4 rounded-md py-3 px-3  bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="State"
              />
              <input
                type="text"
                class="relative outline-none ml-4 rounded-md py-3 px-3  bg-white border-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-2-outline"
                placeholder="PIN"
              />
            </div>
            <hr />
            <div className="my-4  w-9/12">
              <button onClick={()=>setShowFinnalPage(true)} className="hover:bg-blue-900 text-white  btn-hover color-1 font-bold py-2 px-4 border border-indigo-700 rounded-md  items-center w-auto  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 inline"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>{" "}
                Confirm & pay now
              </button>
              <div className="text-xs text-gray-400 mt-6">
                By clicking the button above, I agree to the terms & conditions
                by MyKidsCircle. SSL SECURED PAYMENT. Your information is
                protected by 256-bit SSL encryption.
              </div>
            </div>
          </div>
          {/*bill  */}
          <div className="realtive overflow-hidden w-ful col-span-4">
            <div className="fixed border rounded-xl shadow-xl p-4  w-80">
              <div className="font-bold text-gray-800 text-xl my-4">
                Order summary
              </div>
              <hr />
              <div>
                <div className="flex justify-between my-4">
                  <div>SubTotal</div>
                  <div>Rs 199</div>
                </div>
                <div className="flex justify-between my-4">
                  <div>Discount (20% off)</div>
                  <div className="text-green-500">- Rs. 40</div>
                </div>{" "}
                <div className="flex justify-between my-4">
                  <div>GST</div>
                  <div>Rs. 36</div>
                </div>{" "}
                <div className="flex justify-between my-4">
                  <div className="text-gray-900 font-semibold">Total</div>
                  <div className="text-gray-900 font-semibold">Rs. 203</div>
                </div>
              </div>
              <hr />
              <div className=" my-4 text-xs">
                <p className="my-4">
                 <span className="font-semibold">We’ll charge your card Rs. 203 now</span>   and on May 3rd each year
                  thereafter.
                </p>
                <p className="my-4"><span className="font-semibold">Cancel anytime</span>, no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
