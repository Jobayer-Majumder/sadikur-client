import { useQuery } from '@apollo/client';
import React from 'react';
// import { useAlert } from 'react-alert';
import { GET_WORKS } from '../../../graphql/queries/queries';



const PortfolioList = () => {
    // const alert = useAlert();
    const { loading, data, error } = useQuery(GET_WORKS);

   

    if (loading) {
        return <h1 className='text-center'>Loading</h1>
    }

    if(error){
        console.log(error)
    };

    return (
        <section>
            <div className="flex justify-between">
                <h2 className="text-gray-800 uppercase text-xl font-semibold">List of Design</h2>
                <input className='px-4 py-2 outline-none shadow focus:ring-1 focus:ring-brand rounded-md' type="text" placeholder='Search Item..' />
            </div>

            <section className="grid grid-cols-1 mt-5">
                <div className="rounded-lg shadow">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-xs lg:text-base font-semibold text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                                    <th className="px-2 py-3">ID</th>
                                    <th className="px-2 py-3">Title</th>
                                    <th className="px-2 py-3">Description</th>
                                    <th className="px-2 py-3">Category</th>
                                    <th className="px-2 py-3">File type</th>
                                    <th className="px-2 py-3">Action</th>
                                    <th className="px-2 py-3">Uploaded_At</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {
                                    data?.works.map((work, index) =>
                                        <tr className="text-gray-700" key={index}>
                                            <td className="px-2 py-3">
                                                {index + 1}
                                            </td>
                                            <td className="px-2 py-3 text-md font-semibold">{work.title}</td>
                                            <td className="px-2 py-3 text-xs">
                                                <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                                            </td>
                                            <td className="px-2 py-3 text-sm">{work.category}</td>
                                            <td className="px-2 py-3 text-sm">{work.file}</td>
                                            <td className="px-2 py-3 text-sm">
                                                <div className="flex gap-2">
                                                    <button className="text-xs py-1 px-2 rounded-md bg-red-100 hover:bg-red-500 text-red-700 hover:text-white">
                                                        Delete
                                                    </button>
                                                    <button className="text-xs py-1 px-2 rounded-md bg-green-100 hover:bg-green-500 text-green-700 hover:text-white">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-2 py-3 text-sm">{new Date(work.createdAt).toDateString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default PortfolioList;