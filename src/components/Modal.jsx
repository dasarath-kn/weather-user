import React from 'react'

const Modal = ({userdatas,handleStatus}) => {
    const [userdetails,setUserdetails]=([userdatas])
    const closeModal =()=>{
        handleStatus(false)
    }
  return (
<div
  id="default-modal"
  tabIndex="-1"
  aria-hidden="true"
  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
>
  <div className="relative p-4 w-full max-w-2xl max-h-full">
    <div className="relative bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-5 border-b rounded-t">
        <h3 className="text-xl text-center font-semibold text-black">User Details</h3>
        <button
          type="button"
          onClick={closeModal}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          data-modal-hide="default-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          
          <span  className="sr-only">Close modal</span>
        </button>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Personal Information</h4>
          <p className="text-gray-600">Name: {userdetails.name}</p>
          <p className="text-gray-600">Username: {userdetails.username}</p>
          <p className="text-gray-600">Email: {userdetails.email}</p>
          <p className="text-gray-600">Phone: {userdetails.phone}</p>
          <p className="text-gray-600">Website: {userdetails.website}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800">Address</h4>
          <p className="text-gray-600">Street: {userdetails.address.street}</p>
          <p className="text-gray-600">Suite: {userdetails.address.suite}</p>
          <p className="text-gray-600">City: {userdetails.address.city}</p>
          <p className="text-gray-600">Zipcode: {userdetails.address.zipcode}</p>
          <p className="text-gray-600">Geo: lat{userdetails.address.geo.lat}, lng:{userdetails.address.geo.lng}</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-800">Company</h4>
          <p className="text-gray-600">Name: {userdetails.company.name}</p>
          <p className="text-gray-600">Catch Phrase:{userdetails.company.catchPhrase}</p>
          <p className="text-gray-600">Business: {userdetails.company.bs}</p>
        </div>
      </div>

     
      <div className="flex items-center justify-center p-6 border-t border-gray-200 rounded-b">
  <button
    data-modal-hide="default-modal"
    type="button"
    onClick={closeModal}
    className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-9 py-2.5"
  >
    Close
  </button>
</div>


    </div>
  </div>
</div>

  )
}

export default Modal
