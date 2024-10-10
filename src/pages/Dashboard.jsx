import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopNavigationBar from './components/TopNavigationBar';



const Dashboard = () => {
    // const userRole = JSON.parse(localStorage.getItem('user')).role;
    const userRole = localStorage.getItem('userRole');
    
    return (
        <>
        <TopNavigationBar/>
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                {userRole === 'ADMIN' && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold">Admin Panel</h2>
                        <Link to="/admin/courses" className="text-blue-600 hover:underline">
                            Manage Courses
                        </Link>
                    </div>
                )}

                {userRole === 'ACADEMIC_HEAD' && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold">Academic Head Panel</h2>
                        <Link to="/academic/courses" className="text-blue-600 hover:underline">
                            Manage Modules
                        </Link>
                    </div>
                )}

                {userRole === 'TEACHER' && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold">Teacher Panel</h2>
                        <p>View your allocated courses and modules.</p>
                    </div>
                )}

                {userRole === 'STUDENT' && (
                    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold">Student Dashboard</h2>
                        <p>View your enrolled courses and modules.</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Dashboard;