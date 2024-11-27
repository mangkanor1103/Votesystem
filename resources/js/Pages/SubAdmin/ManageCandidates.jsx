import React, { useState } from 'react';

const ManageCandidates = () => {
  const positions = ['President', 'Vice President', 'Secretary', 'Treasurer']; // Example positions
  const [votes, setVotes] = useState({
    President: '',
    'Vice President': '',
    Secretary: '',
    Treasurer: '',
  });

  const candidates = {
    President: [
      { id: 1, name: 'John Doe', picture: 'john_doe.jpg', votes: 0 },
      { id: 2, name: 'Jane Smith', picture: 'jane_smith.jpg', votes: 0 },
    ],
    'Vice President': [
      { id: 1, name: 'Alice Brown', picture: 'alice_brown.jpg', votes: 0 },
      { id: 2, name: 'Bob White', picture: 'bob_white.jpg', votes: 0 },
    ],
    Secretary: [
      { id: 1, name: 'Charlie Green', picture: 'charlie_green.jpg', votes: 0 },
      { id: 2, name: 'Dana Black', picture: 'dana_black.jpg', votes: 0 },
    ],
    Treasurer: [
      { id: 1, name: 'Eve Yellow', picture: 'eve_yellow.jpg', votes: 0 },
      { id: 2, name: 'Frank Gray', picture: 'frank_gray.jpg', votes: 0 },
    ],
  };

  const handleVote = (position, candidateId) => {
    setVotes((prevVotes) => ({ ...prevVotes, [position]: candidateId }));
  };

  const handleAbstain = (position) => {
    setVotes((prevVotes) => ({ ...prevVotes, [position]: 'Abstain' }));
  };

  const handleSubmit = () => {
    // Normally, you'd handle submission to backend here
    console.log('Votes:', votes);
    // Redirect to Election Results page (or navigate programmatically)
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg border-t-4 border-green-600">
          <div className="p-6 text-gray-900">
            <h3 className="text-lg font-medium text-green-700 mb-4">Manage Candidates</h3>

            {/* Back to Home Button */}
            <button className="text-green-600 hover:text-green-700 flex items-center mb-6">
              <FaArrowLeft className="mr-2" /> Back To Home
            </button>

            {positions.map((position) => (
              <div key={position} className="mb-8">
                <h4 className="font-semibold text-green-800">{position}</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  {candidates[position].map((candidate) => (
                    <div
                      key={candidate.id}
                      className="flex flex-col items-center text-center border p-4 rounded-lg shadow-md hover:bg-green-50"
                    >
                      <img
                        src={`/images/${candidate.picture}`} // Example image path
                        alt={candidate.name}
                        className="w-24 h-24 object-cover rounded-full mb-2"
                        onClick={() => handleVote(position, candidate.id)}
                      />
                      <p className="font-medium text-gray-700">{candidate.name}</p>
                      <button
                        className="mt-2 bg-gray-300 text-gray-700 py-1 px-4 rounded-md"
                        onClick={() => handleAbstain(position)}
                      >
                        Abstain
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition duration-200 mt-6"
            >
              Submit Vote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCandidates;
  