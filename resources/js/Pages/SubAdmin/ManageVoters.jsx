import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

const ManageVoters = () => {
  const [numCodes, setNumCodes] = useState('');
  const [voterCodes, setVoterCodes] = useState([]);

  const generateVoterCodes = () => {
    const codes = [];
    for (let i = 0; i < numCodes; i++) {
      // Generate a random voter code (alphanumeric, 6 characters long)
      const code = Math.random().toString(36).substr(2, 6).toUpperCase();
      codes.push({ id: i + 1, code });
    }
    setVoterCodes(codes);
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg border-t-4 border-green-600">
          <div className="p-6 text-gray-900">
            <h3 className="text-lg font-medium text-green-700 mb-4">Generate Voter Code</h3>

            {/* Back to Home Button */}
            <button className="text-green-600 hover:text-green-700 flex items-center mb-6">
              <FaArrowLeft className="mr-2" /> Back To Home
            </button>

            {/* Generate Voter Codes */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-green-800">Generate Voter Codes</h4>
              <div className="space-y-4">
                <input
                  type="number"
                  value={numCodes}
                  onChange={(e) => setNumCodes(e.target.value)}
                  placeholder="Number of Codes to generate"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={generateVoterCodes}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                Generate Codes
              </button>
            </div>

            {/* Generated Voter Codes Table */}
            {voterCodes.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-green-800 mb-4">Generated Voter Codes</h4>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2">ID</th>
                      <th className="text-left px-4 py-2">Voter Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voterCodes.map((voter) => (
                      <tr key={voter.id} className="border-t">
                        <td className="px-4 py-2">{voter.id}</td>
                        <td className="px-4 py-2">{voter.code}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageVoters;
