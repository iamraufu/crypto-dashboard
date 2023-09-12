import React from 'react';
import logo from '../images/logo.svg'

const Sidebar = () => {
      return (
            <div>
                  <div className="d-flex justify-content-center align-items-center pt-5">
                        <img src={logo} alt="Brand Logo" />
                        <h1 className='title-text'><span className='title-text-primary'>Blue</span><span className='title-text-secondary'>Trade.</span></h1>
                  </div>
            </div>
      );
};

export default Sidebar;