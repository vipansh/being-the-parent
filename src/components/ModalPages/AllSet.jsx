import React from 'react'

const AllSet = ({setModalOpenId,setShowBusinessModal}) => {
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
           You're all set
          </h3>
        </div>
        {/*body*/}
        <div className="p-4">
          <div className="p-2">
            {/* header */}
            Welcome on aboard!
          </div>
          <div class="p-2 my-2">
           You're all set to create business listing on Local now and grow your business faster.
          </div>
          <div class="p-2 my-2">
           And now you're hear,know that we're always standing by to help you.
          </div>
         
          <div class="p-2 my-2">
            <button
              onClick={() => {
                setShowBusinessModal(true);
              }}
              class="hover:bg-blue-900 text-white  rounded-md w-full items-center py-2  btn-hover color-1"
            >
             Let's create my first Listing
            </button>
          </div>

          <div class="p-2 my-4 text-gray-600">
            Having a problem? <span className="underline">Contact Us</span>
          </div>
        </div>
      </div>
    </div>
    )
}

export default AllSet
