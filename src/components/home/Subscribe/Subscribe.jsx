import React from 'react';

const Subscribe = () => {
    return (
        <section>
            <div className="max-w-6xl px-4 sm:px-6 m-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-700 rounded-tl-lg rounded-bl-lg">
                        <img src="https://ce48ba.justcreative.com/users/eae28554c265/images/0f054f1ee5591562646223-branding-briefcase-min.png" alt="profile of sadikur rahman" />
                    </div>
                    <div className="px-5 text-center bg-gray-100 rounded-br-lg rounded-tr-md">
                        <h3 className="text-xl md:text-3xl lg:text-3xl pb-2 pt-12 text-gray-800 font-bold">
                            Download the FREE Branding Briefcase & Grow Your Business
                        </h3>
                        <p className='text-sm md:text-base lg:text-xl font-semibold text-gray-800'>
                            Get access to 100's of branding, design & business resources including a mini course on branding
                        </p>

                        <div className="py-3">
                            <input className='px-4 py-4 border-2 border-gray-200 focus:border-primary duration-500 rounded-md outline-none w-full' type="email" name="email" id="" placeholder='Enter Your Email Here.' />
                            <button className='w-full px-6 py-4 mt-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                                Yes, Please
                            </button>
                            <p className="text-gray-500 py-2">
                                100% Privacy - No spam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;