import React from "react";

const PaymentHomePage = ({ showPaymentPage, setShowOrderPage }) => {
  const [billingCycle, setBillingCycle] = React.useState(true);
  return (
    <>
      <div
        className={` overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none w-screen  h-screen bg-white transform ease-in-out duration-300  ${
          showPaymentPage ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>Logo</nav>

        <div className="flex justify-center mt-24 w-7/12 mx-auto">
          <div className="flex justify-center flex-col w-full  items-start ">
            <div className=" flex justify-center flex-col w-full text-center">
              <div className="font-bold text-3xl text-gray-700 ">
                Upgrade to premium for Rs. 99/month, all inclusive.
                <div className=" text-2xl">(or Rs. 1000/year and save 20%)</div>
              </div>
            </div>
            {/* billing cycle */}
            <div className="mt-36 w-full">
              <div className="flex w-full">
                <div className=" bg-white p-8 w-2/5 rounded-lg shadow-2xl">
                  <div className="font-bold text-lg text-gray-700 ">
                    Choose billing cycle
                  </div>
                  <div class="flex items-center my-4  ">
                    <div class="flex items-center mr-4 mb-4 ">
                      <input
                        id="radio1"
                        type="radio"
                        name="radio"
                        class="hidden"
                        checked={!billingCycle}
                        onClick={() => setBillingCycle(!billingCycle)}
                      />
                      <label
                        for="radio1"
                        class="flex items-center cursor-pointer text-sm font-semibold"
                      >
                        <span class="w-4 h-4 inline-block  rounded-full border border-grey flex-no-shrink"></span>
                        <div className="inline ml-1">
                          {" "}
                          Annual -
                          <div className="inline text-red-500 mx-2">
                            Save 20%
                          </div>{" "}
                        </div>
                      </label>
                    </div>
                    <div class="flex items-center mr-4 mb-4">
                      <input
                        id="radio1"
                        type="radio"
                        name="radio"
                        class="hidden"
                        checked={billingCycle}
                        onClick={() => setBillingCycle(!billingCycle)}
                      />
                      <label
                        for="radio1"
                        class="flex items-center cursor-pointer text-sm font-semibold"
                      >
                        <span class="w-4 h-4 inline-block  rounded-full border border-grey flex-no-shrink"></span>
                        <div className="inline ml-1"> Best choice </div>
                      </label>
                    </div>
                  </div>
                  <div className="mt-8 w-full">
                    <div className="text-xs text-gray-500 line-through">
                      Rs. 3200
                    </div>
                    <div className="text-3xl text-gray-700 font-bold">
                      Rs.1000
                    </div>
                    <div className="text-xs text-gray-500 ">Per year</div>
                  </div>
                  <div class="mt-4 ">
                    <button
                      class="btn-hover color-1 px-8 py-2"
                      onClick={() => setShowOrderPage(true)}
                    >
                      Choose the plan
                    </button>
                  </div>
                </div>
                <div className="w-3/5 shadow-2xl  p-8 bg-gray-50">
                  <div className="my-8">
                    One Small investment, manyfold return
                  </div>
                  <hr />
                  <div className="my-2">
                    {" "}
                    Appear higher in the search results
                  </div>
                  <div className="my-2">
                    Create a dedicated business page and add more details
                  </div>
                  <div className="my-2">
                    Add photos, videos and stand out from the competition
                  </div>
                  <div className="my-2">
                    Instantly chat with your customers and convert more leads
                  </div>
                  <div className="my-2">
                    Integrate payment and receive payments
                  </div>
                  <div className="my-2">
                    Manage orders and your business from a simple dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentHomePage;
