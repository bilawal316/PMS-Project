import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {UsersIcon, UserIcon} from '@heroicons/react/24/outline'

const TraineeNum = () => {
  const [totalTrainees, setTotalTrainees] = useState(0);

  const getTotalTrainees = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/user/getTotalTrainees");

      if (data.response) {
        setTotalTrainees(data.response.totalTrainees);
      }
    } catch (error) {
      console.error("Error fetching total trainees:", error);
    }
  };

  useEffect(() => {
    void getTotalTrainees();
  }, []);

  return (
    <>
    <div className="w-full lg:w-1/5 p-4 mx-auto my-6 bg-indigo-200 rounded-lg shadow-md">
      <div className="text-center">
      <div className='flex'>
      <UsersIcon className='text-purple-700' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Trainee List</h2>
        </div>
        <div className="bg-white p-6 rounded-lg">
          {/* Set the size of the icon here */}
          {/* Rest of your content */}
          <p className="text-lg font-medium text-gray-800">Total Trainees: {totalTrainees}</p>
        </div>
      </div>
    </div>
      <div className="w-full lg:w-1/5 p-4 mx-auto my-6 bg-indigo-200 rounded-lg shadow-md">
      <div className="text-center">
      <div className='flex'>
      <UsersIcon className='text-purple-700' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Trainee List</h2>
        </div>
        <div className="bg-white p-6 rounded-lg">
          {/* Set the size of the icon here */}
          {/* Rest of your content */}
          <p className="text-lg font-medium text-gray-800">Total Trainees: {totalTrainees}</p>
        </div>
      </div>
      
    </div>
    <div className="w-full lg:w-1/5 p-4 mx-auto my-6 bg-indigo-200 rounded-lg shadow-md">
      <div className="text-center">
      <div className='flex'>
      <UsersIcon className='text-purple-700' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Trainee List</h2>
        </div>
        <div className="bg-white p-6 rounded-lg">
          {/* Set the size of the icon here */}
          {/* Rest of your content */}
          <p className="text-lg font-medium text-gray-800">Total Trainees: {totalTrainees}</p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/5 p-4 mx-auto my-6 bg-indigo-200 rounded-lg shadow-md">
      <div className="text-center">
      <div className='flex'>
      <UsersIcon className='text-purple-700' style={{ width: '40px', height: '40px' }} />
        <h2 className="text-3xl font-semibold text-purple-500 mb-4">Trainee List</h2>
        </div>
        <div className="bg-white p-6 rounded-lg">
          {/* Set the size of the icon here */}
          {/* Rest of your content */}
          <p className="text-lg font-medium text-gray-800">Total Trainees: {totalTrainees}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TraineeNum;