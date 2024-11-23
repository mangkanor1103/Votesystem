import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Election({ election }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (election && election.id) {
            // Automatically navigate to the election details page
            navigate(`/election/${election.id}`);
        }
    }, [election, navigate]);  // Run the effect when 'election' changes

    if (!election || !election.id || !election.election_name || !election.election_date) {
        return <div className="p-4 text-red-600">Invalid election data</div>;
    }

    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-md mb-4">
            <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-700">{election.election_name}</h3>
                <p className="text-sm text-gray-500">Date: {election.election_date}</p>
            </div>
        </div>
    );
}
