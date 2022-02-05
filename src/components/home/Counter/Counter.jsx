import React from 'react';
import { counterData } from './counterData';

const Counter = () => {
    return (
        <section>
            <div className="max-w-6xl px-4 sm:px-6 m-auto py-8">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {
                        counterData.map((d, index) =>
                            <section key={index} className=''>
                                <div className="flex items-center justify-center pb-3 cursor-pointer">
                                    {/* <Fade big> */}
                                    <div className="group hover:bg-primary shadow-md transition duration-500 h-36 w-36 border-8 border-gray-200 hover:border-primary flex justify-center items-center rounded-full">
                                        <div className='p-4 text-center'>
                                            <h3 className='text-4xl text-center inline-block duration-500 text-brand group-hover:text-white'>{d.icon}</h3>
                                            <h3 className="text-xl text-brand font-extrabold group-hover:text-gray-200">{d.count}</h3>
                                        </div>
                                    </div>
                                    {/* </Fade> */}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl text-primary font-semibold text-gray-800">{d.title}</h3>
                                </div>
                            </section>

                        )
                    }
                </div>
            </div>

        </section>
    );
};

export default Counter;