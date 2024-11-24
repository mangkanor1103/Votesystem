import React, { useState } from 'react';
import { FaArrowLeft, FaEdit, FaTrashAlt } from 'react-icons/fa';

const ManagePositions = () => {
  const [positions, setPositions] = useState([]);
  const [description, setDescription] = useState('');
  const [maxVote, setMaxVote] = useState('');
  const [priority, setPriority] = useState('');

  const handleCreatePosition = () => {
    if (description && maxVote && priority) {
      const newPosition = {
        id: positions.length + 1, // Automatically generates a unique ID
        description,
        maxVote,
        priority,
      };
      setPositions([...positions, newPosition]);
      setDescription('');
      setMaxVote('');
      setPriority('');
    } else {
      alert('Please fill out all fields');
    }
  };

  const handleDeletePosition = (id) => {
    setPositions(positions.filter(position => position.id !== id));
  };

  const handleEditPosition = (id) => {
    const position = positions.find(position => position.id === id);
    setDescription(position.description);
    setMaxVote(position.maxVote);
    setPriority(position.priority);
    handleDeletePosition(id); // Optional: delete the current position for editing
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg border-t-4 border-green-600">
          <div className="p-6 text-gray-900">
            <h3 className="text-lg font-medium text-green-700 mb-4">Manage Positions</h3>
            {/* Back to Home Button */}
            <button className="text-green-600 hover:text-green-700 flex items-center mb-6">
              <FaArrowLeft className="mr-2" /> Back To Home
            </button>

            {/* Create Position Form */}
            <div className="space-y-4 mb-8">
              <h4 className="font-semibold text-green-800">Create Position</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  value={maxVote}
                  onChange={(e) => setMaxVote(e.target.value)}
                  placeholder="Max Vote"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  placeholder="Priority"
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              </div>
              <button
                onClick={handleCreatePosition}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200"
              >
                Create Position
              </button>
            </div>

            {/* Position List */}
            <div className="mt-8">
              <h4 className="font-semibold text-green-800 mb-4">Position List</h4>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2">ID</th>
                    <th className="text-left px-4 py-2">Description</th>
                    <th className="text-left px-4 py-2">Max Vote</th>
                    <th className="text-left px-4 py-2">Priority</th>
                    <th className="text-left px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {positions.map((position) => (
                    <tr key={position.id} className="border-t">
                      <td className="px-4 py-2">{position.id}</td>
                      <td className="px-4 py-2">{position.description}</td>
                      <td className="px-4 py-2">{position.maxVote}</td>
                      <td className="px-4 py-2">{position.priority}</td>
                      <td className="px-4 py-2 space-x-2">
                        <button
                          onClick={() => handleEditPosition(position.id)}
                          className="text-blue-600 hover:text-blue-700 flex items-center"
                        >
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeletePosition(position.id)}
                          className="text-red-600 hover:text-red-700 flex items-center"
                        >
                          <FaTrashAlt className="mr-1" /> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePositions;
