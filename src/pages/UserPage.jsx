import React from 'react'
import SideBar from '../components/SideBar'
import Table from '../components/table'

const UserPage = () => {
  return (
    <>
     <div className="min-h-screen w-full flex bg-gray-100">
      <SideBar />
      <div className="w-5/6  flex justify-center p-8 pt-16">
        <Table />
      </div>
    </div>
    </>
  )
}

export default UserPage
