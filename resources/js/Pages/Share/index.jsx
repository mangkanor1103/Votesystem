import React from "react";
import { FaLeaf } from 'react-icons/fa'; // Import the FaLeaf icon
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Share from "@/Components/Share";


export default function Index({ auth, shares }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('share.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Post" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-green-50">
                {/* Post Form */}
                <form onSubmit={submit} className="space-y-4">
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full p-3 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm text-green-900 transition-all duration-300 ease-in-out transform hover:scale-105"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2 text-red-500" />
                    <PrimaryButton className="mt-4 bg-green-600 text-white hover:bg-green-700 transition-all duration-300 ease-in-out transform hover:scale-105 disabled:bg-green-300" disabled={processing}>
                        {/* Leaf Icon with FaLeaf */}
                        <FaLeaf className="mr-2 text-xl" /> Post
                    </PrimaryButton>
                </form>

                {/* Share List */}
                <div className="mt-6 bg-white shadow-md rounded-lg divide-y divide-green-100">
                    {
                        shares.map(share =>
                            <div key={share.id} className="p-4 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                                <Share key={share.id} share={share} />
                            </div>
                        )
                    }
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
