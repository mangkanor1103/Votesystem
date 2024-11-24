import React from "react";
import { FaUsers, FaChalkboardTeacher, FaPoll, FaClipboardList } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg border-t-4 border-green-600">
          <div className="p-6 text-gray-900">
            <h2 className="text-2xl font-bold text-green-900 mb-4">
              Sub-Admin Dashboard - Manage Elections
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Welcome to the election management dashboard. Here you can manage candidates, positions, voters, and view election results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Manage Candidates Section */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-3xl text-green-600 mr-4" />
                  <h4 className="text-lg font-semibold text-green-800">Manage Candidates</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Add, edit, or remove candidates for the election.
                </p>
                <a
                  href="/candidates"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Manage Candidates
                </a>
              </div>

              {/* Manage Positions Section */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaChalkboardTeacher className="text-3xl text-green-600 mr-4" />
                  <h4 className="text-lg font-semibold text-green-800">Manage Positions</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Set up positions and assign candidates.
                </p>
                <a
                  href="/positions"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Manage Positions
                </a>
              </div>

              {/* Manage Voters Section */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaClipboardList className="text-3xl text-green-600 mr-4" />
                  <h4 className="text-lg font-semibold text-green-800">Manage Voters</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Add or update voters participating in the election.
                </p>
                <a
                  href="/voters"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Manage Voters
                </a>
              </div>

              {/* Election Results Section */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FaPoll className="text-3xl text-green-600 mr-4" />
                  <h4 className="text-lg font-semibold text-green-800">Election Results</h4>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  View the election results.
                </p>
                <a
                  href="/results"
                  className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                >
                  View Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
