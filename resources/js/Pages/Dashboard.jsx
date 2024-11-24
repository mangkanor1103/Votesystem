import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React,{ useState, useEffect } from 'react';
import { FaUserShield, FaUserPlus, FaChartPie, FaCog } from 'react-icons/fa';

export default function SuperAdminDashboard() {




    /*const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setLoading(true);
        axios.get('/data')

        .then(response => {
            setData(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            setLoading(false);
        })

        }, [])





        { loading
         ?{

            <p>Loading..</p>

         }


         :{

                    <ul>
        {data.map((item, index) => (
            <li key={index}>
                {item.id} = {item.name}
            </li>
        ))}
    </ul>

         }*/







    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-2xl font-bold text-green-900">
                    Mindoro State University Online Voting System - Super Admin Dashboard
                </h2>
            }
        >
            <Head title="Super Admin Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg border-t-4 border-green-600">
                        <div className="p-6 text-gray-900">
                            <h3 className="text-lg font-medium text-green-700 mb-4">
                                Super Admin Dashboard - Manage Sub-Admins and System Settings
                            </h3>

                            <div className="flex justify-between items-center bg-green-100 p-4 rounded-md">
                                <div>

                                    <h4 className="font-semibold text-green-800">
                                        <FaUserShield className="inline-block mr-2 text-green-600" />
                                        Sub-Admin Management
                                    </h4>
                                    <p className="text-sm text-green-700">
                                        Oversee and manage all sub-admin accounts for individual election systems.
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
                                        View Sub-Admins
                                    </button>
                                    <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
                                        <FaUserPlus className="inline-block mr-1" />
                                        Add New Sub-Admin
                                    </button>
                                </div>
                            </div>

                            <div className="mt-8 bg-green-50 p-6 rounded-lg shadow-md">
                                <h4 className="font-semibold text-green-700 mb-4">
                                    <FaChartPie className="inline-block mr-2 text-green-600" />
                                    System Activity Overview
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-gray-800">
                                        <span>Active Elections Across Campuses</span>
                                        <span className="text-sm text-green-600">12 Active</span>
                                    </li>
                                    <li className="flex justify-between items-center text-gray-800">
                                        <span>Total Registered Sub-Admins</span>
                                        <span className="text-sm text-green-600">5</span>
                                    </li>
                                    <li className="flex justify-between items-center text-gray-800">
                                        <span>Pending Sub-Admin Approval Requests</span>
                                        <span className="text-sm text-green-600">2 Pending</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                                <h4 className="font-semibold text-green-700 mb-4">
                                    <FaCog className="inline-block mr-2 text-green-600" />
                                    System Configuration and Settings
                                </h4>
                                <div className="flex flex-col space-y-4">
                                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200">
                                        Configure Voting Settings
                                    </button>
                                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200">
                                        Update System Policies
                                    </button>
                                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200">
                                        Monitor System Health
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
