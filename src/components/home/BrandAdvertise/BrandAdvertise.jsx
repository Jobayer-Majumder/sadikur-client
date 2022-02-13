import React from 'react';
import { Link } from 'react-router-dom';

const BrandAdvertise = () => {
    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-20">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <img src="https://justcreative.com/wp-content/uploads/2021/04/Vascular-Nutrition-Packaging.png.webp" alt="profile of sadikur rahman" />
                    </div>
                    <div className="px-5 flex justify-center items-center">
                        <div className='text-center md:text-left'>
                            <h3 className="text-xl md:text-3xl lg:text-5xl md:pb-2 pt-12 text-gray-800 font-bold">
                                We design brands that stand out & get results
                            </h3>
                            <p className='py-4 text-sm md:text-base lg:text-xl font-semibold text-gray-800'>
                                Our brand strategy & brand design services enable you to grow a purposeful business with clarity ensuring your business cuts through the noise while delivering a clear message.
                            </p>

                            <div className="pb-3">
                                <Link to='/portfolio'>
                                    <button className='px-6 py-4 mt-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                                        View Portfolio
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandAdvertise;