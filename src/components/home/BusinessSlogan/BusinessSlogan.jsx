import React from 'react';
import { MdDone } from 'react-icons/md';
import { businessSloganData } from './businessSloganData';



const BusinessSlogan = () => {
    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                            Stop slowing down the growth of your business
                        </h2>
                        <p className="text-sm md:text-base lg:text-xl text-gray-800 py-5">
                            Stop wasting hours of your time trying to grow your business without a plan. Build your business with a solid brand strategy.
                        </p>

                        {
                            businessSloganData?.map((list, index) =>
                                <ul key={index}>
                                    <li className='font-semibold text-gray-800 text-lg md:text-xl font-semibold-2 py-1'>
                                        <MdDone className='text-white inline p-1 text-2xl bg-primary rounded-full'>✓</MdDone> {''}
                                        {list}
                                    </li>
                                </ul>
                            )
                        }

                        <button className='mt-4 px-6 py-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                            Book Free Brand Clarity Call
                        </button>
                    </div>
                    <div className="">
                        <img src="https://justcreative.com/wp-content/uploads/2021/04/strategy-design-growth-chart.svg" alt="business slogan demo" />
                        <p className="text-sm text-center md:text-base lg:text-xl font-semibold text-gray-800">
                            We combine strategy, design and growth into our brand building process.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default BusinessSlogan;