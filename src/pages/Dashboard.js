import React from 'react';
import Sidebar from '../components/Sidebar';
import MainDashboard from '../components/Dashboard/MainDashboard';

const Dashboard = () => {
    return (
        <div className="d-flex">
            <div className="col-md-2 bg-sidebar">
                <Sidebar />
            </div>
            <div className="col-md-10 bg-main-dashboard">
                <MainDashboard />
            </div>
        </div>
    );
};

export default Dashboard;