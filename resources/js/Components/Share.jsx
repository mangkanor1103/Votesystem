import React, { useState } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Dropdown from "./Dropdown";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import { FaEdit, FaTimes, FaTrash } from 'react-icons/fa'; // Import trash icon

dayjs.extend(relativeTime);

export default function Share({ share }) {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: share.message,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('share.update', share.id), {
            onSuccess: () => setEditing(false)
        });
    };

    // Handle delete request
    const deleteShare = () => {
        if (confirm("Are you sure you want to delete this share?")) {
            // Replace with your delete route
            // The "delete" route could be something like "share.destroy"
            axios.delete(route('share.destroy', share.id))
                .then(() => {
                    // Handle success (maybe redirect or show a message)
                    window.location.reload(); // Reload page or redirect
                })
                .catch(err => {
                    console.error('Error deleting share:', err);
                    // Handle error (e.g., show a notification)
                });
        }
    };

    return (
        <div className="p-6 flex space-x-2 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-green-50 rounded-lg shadow-md hover:shadow-lg">
            {/* Comment Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>

            <div className="flex-1">
                {/* Header with user info */}
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-green-900 font-bold">{share.user.name}</span>
                        <small className="ml-2 text-sm text-gray-500">{dayjs(share.created_at).fromNow()}</small>
                        {share.created_at !== share.updated && <small className="text-sm text-gray-500"> &middot; edited </small>}
                    </div>
                    {/* Dropdown for edit and delete options */}
                    {share.user.id === auth.user.id && (
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="flex items-center w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-green-100 focus:bg-green-100 transition duration-150 ease-in-out"
                                    onClick={() => setEditing(true)}
                                >
                                    <FaEdit className="mr-2" /> Edit
                                </button>
                                <button
                                    className="flex items-center w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-red-100 focus:bg-red-100 transition duration-150 ease-in-out"
                                    onClick={deleteShare}
                                >
                                    <FaTrash className="mr-2 text-red-600" /> Delete
                                </button>
                            </Dropdown.Content>
                        </Dropdown>
                    )}
                </div>

                {/* Message Content */}
                {editing ? (
                    <form onSubmit={submit} className="mt-4">
                        <textarea
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                            className="w-full text-gray-900 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-300 ease-in-out"
                        ></textarea>
                        <InputError message={errors.message} className="mt-2 text-red-500" />

                        {/* Save and Cancel Buttons */}
                        <div className="flex space-x-2 mt-4">
                            <PrimaryButton className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105">Save</PrimaryButton>
                            <button
                                type="button"
                                className="text-gray-500 hover:text-red-600 flex items-center transition-colors duration-300 ease-in-out"
                                onClick={() => { setEditing(false); reset(); clearErrors(); }}
                            >
                                <FaTimes className="mr-1" /> Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <p className="mt-4 text-lg text-green-900">{share.message}</p>
                )}
            </div>
        </div>
    );
}
