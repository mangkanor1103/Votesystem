import React from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ElectionDetails({ auth, election }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title={`Election: ${election.name}`} />

            <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-2xl font-bold text-green-900">{election.name}</h1>
                <p className="text-sm text-gray-500">Code: {election.code}</p>
                <p className="text-gray-700 mt-2">Date: {election.date}</p>
            </div>
        </AuthenticatedLayout>
    );
}
