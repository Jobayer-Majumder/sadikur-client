import React from 'react';
import { MdOutlineCloudDone } from 'react-icons/md';


const Banner = () => {
    return (
        <section className='bg-gray-100'>
            <div className="max-w-6xl px-4 sm:px-6 m-auto py-6">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2">
                    <div className="">
                        <h2 className="text-3xl lg:text-5xl pb-2 pt-12 text-gray-800 font-bold">
                            Unlock Your Brand's
                        </h2>
                        <h2 className="text-3xl lg:text-5xl pb-8 md:pb-12 text-gray-800 font-bold">
                            True Potential
                        </h2>
                        <div className="pb-4">
                            <div className='py-2'>
                                <MdOutlineCloudDone className='inline p-1.5 rounded-full text-4xl bg-primary text-white'/> {''}
                                <p className='inline text-sm md:text-base lg:text-xl font-semibold text-gray-800'>Clarify your message</p>
                            </div>
                            <div className='py-2'>
                                <MdOutlineCloudDone className='inline p-1.5 rounded-full text-4xl bg-primary text-white'/> {''}
                                <p className='inline text-sm md:text-base lg:text-xl font-semibold text-gray-800'>Connect with your ideal customers</p>
                            </div>
                            <div className='py-2'>
                                <MdOutlineCloudDone className='inline p-1.5 rounded-full text-4xl bg-primary text-white'/> {''}
                                <p className='inline text-sm md:text-base lg:text-xl font-semibold text-gray-800'>Build a brand with substance</p>
                            </div>
                        </div>
                        <button className='px-6 py-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                            Book Free Brand Clarity Call
                        </button>
                    </div>
                    <div className="">
                        <img src="https://justcreative.com/wp-content/uploads/2021/04/jacob-cass-header3-min.png.webp" alt="profile of sadikur rahman" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Banner;