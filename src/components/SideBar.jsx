import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCloudSun, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="md:hidden p-4" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      <div
        className={`fixed top-0 left-0 h-full min-h-screen bg-orange-500 text-white flex flex-col p-4 transition-transform duration-300 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-72`}
      >
        <div className='w-full flex justify-center'>
          <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
        </div>

        <button onClick={() => navigate('/')} className="flex items-center gap-3 w-full py-3 px-4 mb-4 rounded-lg transition-all duration-300 hover:bg-orange-600 focus:bg-orange-700">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <span>Users</span>
        </button>

        <button onClick={() => navigate('/weather')} className="flex items-center gap-3 w-full py-3 px-4 rounded-lg transition-all duration-300 hover:bg-orange-600 focus:bg-orange-700">
          <FontAwesomeIcon icon={faCloudSun} size="lg" />
          <span>Weather</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
