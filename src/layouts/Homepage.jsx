import React from "react";
import ShowModal from "../components/Modal/ShowModal";

const Homepage = () => {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div>
      <ShowModal showModal={openModal} setShowModal={setOpenModal} />

      <div className="h-screen text-white bg-gray-800">
        <div className="mx-auto w-3/4 py-8">
          <div className="text-4xl w-40"> being the parent</div>
          <div className="mt-12 font-semibold">
            INDIA’S FIRST PARENTING MARKETPLACE
          </div>
          <div className="my-8 font-semibold text-5xl  w-2/4">
            List your business online. Start getting orders.
          </div>
          <div className="my-8   w-2/4">
            Local empowers small businesses to build their e-Commerce listing,
            put it in front of millions of parents and drive more sales.
          </div>
          <div className="flex justify-between w-2/4 ">
            <button
              className="px-4 py-2 bg-pink-600 rounded "
              onClick={() => setOpenModal(true)}
            >
              Create my free listing
            </button>
            <div>Login</div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
