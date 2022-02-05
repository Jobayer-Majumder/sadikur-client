import { useQuery } from '@apollo/client';
import React from 'react';
import { useAlert } from 'react-alert';
import { GET_USERS } from '../../../graphql/queries/queries';



const UserList = () => {
    const alert = useAlert();
    const { loading, data, error } = useQuery(GET_USERS);

    if(loading){
        return <p>Loading...</p>
    };

    if(error){
        alert.error(error.message)
    };


    return (
        <>
            <section className="grid grid-cols-1 mt-5">
                <div className="rounded-lg shadow">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs lg:text-base font-semibold text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                                    <th className="px-2 py-3">Sr.</th>
                                    <th className="px-2 py-3">Name</th>
                                    <th className="px-2 py-3">Email</th>
                                    <th className="px-2 py-3">Role</th>
                                    <th className="px-2 py-3">Action</th>
                                    <th className="px-2 py-3">Created At</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    data?.users.map((user, index) =>
                                        <tr className="text-gray-700" key={index}>
                                            <td className="px-2 py-3">
                                                {index + 1}
                                            </td>
                                            <td className="px-2 py-3 text-md font-semibold">{user.name}</td>

                                            <td className="px-2 py-3 text-sm">{user.email}</td>
                                            <td className="px-2 py-3 text-sm">{user.role}</td>
                                            <td className="px-2 py-3 text-sm">
                                                <div className="flex gap-2">
                                                    <button className="text-xs py-1 px-2 rounded-md bg-red-100 hover:bg-red-500 text-red-700 hover:text-white">
                                                        Remove
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-2 py-3 text-sm">{new Date(user.createdAt).toDateString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    );
};

export default UserList;