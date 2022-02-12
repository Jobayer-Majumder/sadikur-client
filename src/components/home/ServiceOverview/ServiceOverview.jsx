import React from 'react';
import { Link } from 'react-router-dom';
import { MdPeopleOutline } from 'react-icons/md';
import { TiMediaStop } from 'react-icons/ti';

const ServiceOverview = () => {

    const dummy = [
        'Services',
        'About',
        'Portfolio',
        'Just branding podcast',
        'Free branding bundle'
    ]

    return (
        <section className='bg-gray-100'>
            <div className="max-w-6xl px-4 sm:px-6 m-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="py-6 px-6 rounded-2xl bg-white">
                        <div className='py-4 flex gap-5 justify-center md:justify-start items-center'>
                            <MdPeopleOutline className='inline text-4xl md:text-7xl text-brand' />
                            <h2 className='inline text-2xl text-gray-800 font-semibold md:text-3xl'>For Client</h2>
                        </div>
                        <h1 className="text-xl md:text-3xl lg:text-5xl md:pb-4 text-gray-800 font-bold">
                            Branding, Design & Strategy
                        </h1>
                        <p className='py-5 text-lg md:text-2xl text-gray-600'>
                            JUST Creative is a full-service branding & design agency specializing in building brands with substance.
                        </p>
                        {
                            dummy.map((list, index) =>
                                <ul key={index}>
                                    <li className='text-brand text-lg md:text-xl font-semibold-2'>
                                        <TiMediaStop className='inline text-gray-800 mr-2' />
                                        {list}
                                    </li>
                                </ul>
                            )
                        }
                        <button className='px-6 py-3 mt-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                            <Link to='/services'>View Services</Link>
                        </button>
                    </div>
                    <div className="py-6 px-6 rounded-2xl bg-white">
                        <div className='py-4 flex gap-5 justify-center md:justify-start items-center'>
                            <MdPeopleOutline className='inline text-4xl md:text-7xl text-brand' />
                            <h2 className='inline text-xl text-gray-800 font-semibold md:text-3xl'>For Designers & Creatives</h2>
                        </div>
                        <h1 className="text-xl md:text-3xl lg:text-5xl md:pb-4 text-gray-800 font-bold">
                            Education & Resources
                        </h1>
                        <p className='py-5 text-lg md:text-2xl text-gray-600'>
                            JUST Creative doubles as an education hub and community for designers, creatives & entrepreneurs.
                        </p>
                        {
                            dummy.map((list, index) =>
                                <ul key={index}>
                                    <li className='text-brand text-lg md:text-xl font-semibold-2'>
                                        <TiMediaStop className='inline text-gray-800 mr-2' />
                                        {list}
                                    </li>
                                </ul>
                            )
                        }
                        <button className='px-6 py-3 mt-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                            View Resources
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceOverview;