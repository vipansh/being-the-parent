import React, { useState, useEffect } from "react";
import BusinessHomePage from "../BusinessModal/BusinessHomePage";
import AllSet from "../ModalPages/AllSet";
import CheckYourInbox from "../ModalPages/CheckYourInbox";
import PhoneNumber from "../ModalPages/PhoneNumber";
import SignUp from "../ModalPages/SignUp";
import FinnalPage from "../PaymentPage/FinnalPage";
import OrderPage from "../PaymentPage/OrderPage";
import PaymentHomePage from "../PaymentPage/PaymentHomePage";

export default function SaveModal({ showModal, setShowModal }) {
  const [showBusinessModal, setShowBusinessModal] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [modalOpenId, setModalOpenId] = useState(1);
  const [showFinnalPage, setShowFinnalPage] = useState(false)

  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (event.target.id !== "outsideClickRef") {
        return;
      }
      setShowModal(false);
      setModalOpenId(1);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [setShowModal]);

  function renderSwitch(modalOpenId) {
    switch (modalOpenId) {
      case 1:
        return (
          <SignUp setShowModal={setShowModal} setModalOpenId={setModalOpenId} />
        );
      case 2:
        return <CheckYourInbox setModalOpenId={setModalOpenId} />;
      case 3:
        return <PhoneNumber setModalOpenId={setModalOpenId} />;
      case 4:
        return (
          <AllSet
            setModalOpenId={setModalOpenId}
            setShowBusinessModal={setShowBusinessModal}
          />
        );
      default:
        return <SignUp setShowModal={setShowModal} />;
    }
  }

  console.log(modalOpenId);

  return (
    <>
      <BusinessHomePage
        showBusinessModal={showBusinessModal}
        setShowPaymentPage={setShowPaymentPage}
      />
      <PaymentHomePage
        showPaymentPage={showPaymentPage}
        setShowOrderPage={setShowOrderPage}
      />
      <OrderPage showOrderPage={showOrderPage} setShowFinnalPage={setShowFinnalPage}/>
      <FinnalPage setShowFinnalPage={setShowFinnalPage} showFinnalPage={showFinnalPage}/>

      <div
        id="outsideClickRef"
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10 outline-none focus:outline-none w-screen h-screen transform ease-in-out duration-300  ${
          showModal ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {renderSwitch(modalOpenId)}
      </div>
    </>
  );
}
