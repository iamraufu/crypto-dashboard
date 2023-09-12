import React from 'react';
import logo from '../images/logo.svg'
import sidebarData from '../data/sidebar/sidebar';

const Sidebar = () => {

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center pt-5">
                <img src={logo} alt="Brand Logo" />
                <h1 className='title-text'><span className='title-text-primary'>Blue</span><span className='title-text-secondary'>Trade.</span></h1>
            </div>
            <div className="mt-5"></div>
            {
                sidebarData.map((item, index) =>
                    index === sidebarData.length - 2 ?
                        <div style={{ borderTop: "1px solid lightgrey" }} 
                        key={index} className="d-flex justify-content-center align-items-center mt-5 mx-5 pt-5">
                            <img src={item.image} alt={item.name} />
                            <h2 className='sidebar-item mt-2 ms-2'>{item.name}</h2>
                        </div>
                        :
                        <div key={index} className="d-flex justify-content-center align-items-center mt-4">
                            <img src={item.image} alt={item.name} />
                            <h2 className='sidebar-item mt-2 ms-2'>{item.name}</h2>
                        </div>
                )
            }
        </div>
    );
};

export default Sidebar;