import React, { useEffect } from "react";
import { FaVoteYea } from 'react-icons/fa'; // Use an icon for elections
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import Election from "@/Components/Election";  // Import Election component

export default function Elections({ auth, elections }) {
    const navigate = useNavigate();  // Hook to navigate to different routes
    const { data, setData, post, processing, reset, errors } = useForm({
        election_name: '',
        election_date: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('election.store'), {
            onSuccess: () => reset(),
        });
    };

    useEffect(() => {
        // Automatically navigate to the first election's details if there are elections
        if (elections.length > 0) {
            navigate(`/election/${elections[0].id}`);
        }
    }, [elections, navigate]);  // Trigger when elections data changes

    return (
        <AuthenticatedLayout>
            <Head title="Elections" />
    
            <div className="flex justify-start max-w-9xl mx-auto p-5 sm:p-9 lg:p-1">
                <div className="max-w-2xl w-full bg-green-50 p-4 sm:p-6 lg:p-8">
                    {/* Election Form */}
                    <form onSubmit={submit} className="space-y-4">
                        <input
                            type="text"
                            value={data.election_name}
                            placeholder="Election Name"
                            className="block w-full p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                            onChange={e => setData('election_name', e.target.value)}
                        />
                        
                        
                        <InputError message={errors.election_name} className="mt-2 text-red-500" />
    
                        <input
                            type="date"
                            value={data.election_date}
                            className="block w-full p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                            onChange={e => setData('election_date', e.target.value)}
                        />
                        <InputError message={errors.election_date} className="mt-2 text-red-500" />
    
                        <PrimaryButton className="mt-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-green-300" disabled={processing}>
                            {/* Vote Icon with FaVoteYea */}
                            <FaVoteYea className="mr-2 text-xl" /> Create Election
                        </PrimaryButton>
                    </form>
    
                    {/* Election List */}
                    <div className="mt-6 bg-white shadow-md rounded-lg divide-y divide-green-100">
                        {
                            elections.map(election =>
                                <div key={election.id} className="p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                    <Election key={election.id} election={election} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
    
}
