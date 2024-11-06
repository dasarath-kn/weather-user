import React from 'react'
import SideBar from '../components/SideBar'
import Weather from '../components/Weather'

const WeatherPage = () => {
  return (
    <>
       <div className="min-h-screen w-full flex bg-gray-100">
      <SideBar />
      <div className="w-5/6  flex justify-center p-8 pt-2">
        <Weather />
      </div>
    </div>
    </>
  )
}

export default WeatherPage
