import React from 'react';
import userIcon from '../../images/dashboard/user.svg'
import threeDots from '../../images/dashboard/threeDots.svg'
import notificationIcon from '../../images/dashboard/notifications.svg'

const TopBarDashboard = () => {
      return (
            <div className='bg-top-dashboard d-flex justify-content-center align-items-center'>
                  <input type="search" name="search" id="" placeholder='Search...' className='search ms-5 p-4' />
                  <img className='img-fluid ms-auto d-block me-5' src={notificationIcon} alt="Notifications" />
                  <div className="bg-top-dashboard-profile d-flex justify-content-center align-items-center px-4 py-2">
                        <img className='img-fluid' src={userIcon} alt="User" />
                        <div className="mx-4 mt-2">
                              <h2 className='text-title'>Eftykhar Rahman</h2>
                              <h3 className='text-sub-title'>eftykharrahman@gmail.com</h3>
                        </div>
                              <img src={threeDots} alt="Three Dots" />
                  </div>
            </div>
      );
};

export default TopBarDashboard;