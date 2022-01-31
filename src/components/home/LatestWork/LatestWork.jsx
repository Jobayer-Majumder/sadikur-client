import React from 'react';
import { latestWorkData } from './LatestWorkData';

const LatestWork = () => {

    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-16">
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-800 pb-8">
                    My Latest Work
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        latestWorkData.slice(0, 3).map((d, index) =>
                            <>
                                <div className="">
                                    <img className='w-full h-72 object-cover rounded border-b-4 cursor-pointer border-transparent hover:border-primary duration-500' src={d} key={index} alt='latest work sample' />
                                </div>
                            </>
                        )
                    }

                </div>
                <div className="py-4">
                    <img className='w-full h-96 rounded border-b-4 cursor-pointer border-transparent hover:border-primary duration-500' src="https://image.freepik.com/free-vector/tire-track-abstract-blue-background_1017-32248.jpg" alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                    {
                        latestWorkData.slice(3, 6).map((d, index) =>
                            <>
                                <div className="">
                                    <img className='w-full h-72 object-cover rounded border-b-4 cursor-pointer border-transparent hover:border-primary duration-500' src={d} key={index} alt='latest work sample' />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestWork;