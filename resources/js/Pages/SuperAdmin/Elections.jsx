import React, { useEffect, useState } from "react";
import { FaVoteYea } from "react-icons/fa"; // Use an icon for elections
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Election from "@/Components/Election"; // Import Election component

export default function Elections({ auth, elections }) {
    const navigate = useNavigate(); // Hook to navigate to different routes
    const [quantity, setQuantity] = useState(0); // State to manage the quantity
    const [generatedCode, setGeneratedCode] = useState(""); // State to display generated code

    const { data, setData, post, processing, reset, errors } = useForm({
        election_name: "",
        election_date: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("election.store"), {
            onSuccess: () => reset(),
        });
    };

    const generateElections = () => {
        if (quantity <= 0) {
            alert("Please enter a valid quantity greater than 0.");
            return;
        }
        const code = `
Generated ${quantity} elections:
${Array.from({ length: quantity }, (_, i) => `Election ${i + 1}`).join("\n")}
        `;
        setGeneratedCode(code);
    };

    useEffect(() => {
        // Automatically navigate to the first election's details if there are elections
        if (elections.length > 0) {
            navigate(`/election/${elections[0].id}`);
        }
    }, [elections, navigate]); // Trigger when elections data changes

    return (
        <AuthenticatedLayout>
            <Head title="Elections" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-green-50">
                {/* Election Form */}
                <form onSubmit={submit} className="space-y-4">
                    <input
                        type="text"
                        value={data.election_name}
                        placeholder="Election Name"
                        className="block w-full p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                        onChange={(e) => setData("election_name", e.target.value)}
                    />
                    <InputError
                        message={errors.election_name}
                        className="mt-2 text-red-500"
                    />

                    <input
                        type="date"
                        value={data.election_date}
                        className="block w-full p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                        onChange={(e) => setData("election_date", e.target.value)}
                    />
                    <InputError
                        message={errors.election_date}
                        className="mt-2 text-red-500"
                    />

                    <PrimaryButton
                        className="mt-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-green-300"
                        disabled={processing}
                    >
                        {/* Vote Icon with FaVoteYea */}
                        <FaVoteYea className="mr-2 text-xl" /> Create Election
                    </PrimaryButton>
                </form>

                {/* Generate Elections */}
                <div className="mt-6 flex items-center space-x-4">
                    <input
                        type="number"
                        value={quantity}
                        placeholder="Enter quantity"
                        className="block w-1/3 p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <PrimaryButton
                        onClick={generateElections}
                        className="bg-green-600 text-white hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Generate
                    </PrimaryButton>
                </div>

                {/* Display Generated Code */}
                {generatedCode && (
                    <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
                        <h3 className="text-lg font-semibold text-green-800">Generated Code:</h3>
                        <pre className="mt-2 p-3 bg-gray-200 rounded text-sm text-green-900 overflow-x-auto">
                            {generatedCode}
                        </pre>
                    </div>
                )}

                {/* Election List */}
                <div className="mt-6 bg-white shadow-md rounded-lg divide-y divide-green-100">
                    {elections.map((election) => (
                        <div
                            key={election.id}
                            className="p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                        >
                            <Election key={election.id} election={election} />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
