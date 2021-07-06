import React, { useState } from "react";
import AllDoneModal from "./AllDoneModal";
import BusinessCategory from "./BusinessCategory";
import BusinessType from "./BusinessType";
import ContactAndLocation from "./ContactAndLocation";
import ModalNavBar from "./ModalNavBar";
import TitleAndPicture from "./TitleAndPicture";

const BusinessHomePage = ({ showBusinessModal ,setShowPaymentPage}) => {
  const [itemNo, setItemNo] = useState(1);
  const [allDone, setAllDone] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function renderSwitch(itemNo) {
    switch (itemNo) {
      case 1:
        return <BusinessType setAllDone={setAllDone} allDone={allDone} />;
      case 2:
        return <BusinessCategory setAllDone={setAllDone} allDone={allDone} />;
      case 3:
        return <TitleAndPicture setAllDone={setAllDone} />;
      case 4:
        return <ContactAndLocation setAllDone={setAllDone} allDone={allDone} />;
      default:
        return <BusinessType setItemNo={setItemNo} itemNo={itemNo} />;
    }
  }

  function renderPosition(itemNo) {
    switch (itemNo) {
      case 1:
        return "Categoty";
      case 2:
        return "Title & Picture";
      case 3:
        return "Contact & Location";
      case 4:
        return "All Done";
      default:
        return "";
    }
  }

  return (
    <>
      <div
        className={`justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none w-screen  transform ease-in-out duration-300  ${
          showBusinessModal ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {showModal && (
          <AllDoneModal setShowModal={setShowModal} showModal={showModal} setShowPaymentPage={setShowPaymentPage} />
        )}
        <div className="h-screen w-screen flex  overflow-x-hidden">
          <div className="border-2 w-96 h-screen bg-blue-100">
            <ModalNavBar setItemNo={setItemNo} itemNo={itemNo} />
          </div>
          <div className="border-2 w-full bg-white">{renderSwitch(itemNo)}</div>
          <div
            class="flex flex-col  fixed bottom-0 left-0  rounded-md "
            style={{ width: "70%", marginLeft: "25%" }}
          >
            <div class="relative pt-1">
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: `${(itemNo * 100) / 4}%` , backgroundColor:"#443DF6"}}
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center "
                ></div>
              </div>
            </div>
            <div class="flex justify-around items-center text-xs">
              <div
                onClick={() => {
                  if (itemNo !== 1) {
                    setItemNo((itemNo) => itemNo - 1);
                    setAllDone(true);
                  }
                }}
              >
                Back
              </div>
              <div>{4 - itemNo} Items to go</div>
              <div class="my-2">
                <button
                  onClick={() => {
                    if (itemNo !== 4 && allDone) {
                      setItemNo((itemNo) => itemNo + 1);
                      setAllDone(false);
                    }
                    if (itemNo === 4 && allDone) {
                      setShowModal(true);
                    }
                  }}
                  class="bg-gray-800 hover:bg-gray-900 text-gray-50 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded-md  flex items-center justify-between"
                >
                  <span className="w-full flex justify-center items-center">
                    {itemNo !== 4 && "Next: "} {renderPosition(itemNo)}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessHomePage;
