import React from 'react';
import { MdDone } from 'react-icons/md';




const SingleCard = ({ service }) => {
    return (
        <>
            <div className="py-6 px-6 rounded-2xl bg-gray-100 shadow-lg">
                <div className='py-4 flex gap-5 justify-center md:justify-start items-center'>
                    <h1  className='inline text-4xl md:text-5xl text-brand border-2 border-primary rounded-full p-5'>
                        {service.icon}
                    </h1>
                </div>
                <h1 className="text-xl md:text-3xl lg:text-5xl pb-2 text-gray-800 font-bold">
                    {service.title}
                </h1>
                <p className='py-5 text-lg md:text-xl text-gray-600'>
                    {service.desc}
                </p>
                {
                    service?.list.map((list, index) =>
                        <ul key={index}>
                            <li className='font-semibold text-gray-800 text-lg md:text-xl font-semibold-2 py-1'>
                                <MdDone className='text-white inline p-1 text-2xl bg-primary rounded-full'>✓</MdDone> {''}
                                {list}
                            </li>
                        </ul>
                    )
                }
            </div>

        </>
    );
};

export default SingleCard;