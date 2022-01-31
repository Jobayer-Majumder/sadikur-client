import React from 'react';
import { reachingGoalData } from './reachingGoalData';

const ReachingGoal = () => {
    return (
        <>
            <section className=''>
                <div className="max-w-7xl px-4 sm:px-6 m-auto py-20">
                    <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                        Reach your goals with our guided process
                    </h1>
                    <hr className='border-primary border-2 w-1/6 rounded-tr-full rounded-bl-full my-8 mx-auto' />
                    <p className="text-center text-sm md:text-base lg:text-xl text-gray-800">
                        We know how overwhelming building a brand can be and that’s why we’re here to guide
                        <br /> you every step of the way! Take the guess work out of growing your brand.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg py-8">
                        {
                            reachingGoalData.map((goal, index) =>
                                <>
                                    <div className={`${goal.bg} py-6 group hover:bg-primary rounded-lg shadow-lg duration-500`} key={index}>
                                        <div className='py-4 flex justify-center items-center'>
                                            <h1 className='inline text-4xl md:text-5xl group-hover:text-white group-hover:border-white text-brand border-2 border-primary rounded-full p-5'>
                                                {goal.icon}
                                            </h1>
                                        </div>
                                        <div className="px-3">
                                            <h1 className="text-xl md:text-3xl py-5 font-bold group-hover:text-white text-gray-800">
                                                <span className="text-brand group-hover:text-white text-xl md:text-4xl font-bold">{index + 1}.</span> {''}
                                                {
                                                    goal.title
                                                }
                                            </h1>
                                            <p className="text-sm md:text-base group-hover:text-white lg:text-xl text-gray-800">
                                                {
                                                    goal.desc
                                                }
                                            </p>
                                            {
                                                index === 0 && <button className='mt-5 px-6 py-4 font-bold group-hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary group-hover:bg-white group-hover:text-brand rounded-full'>
                                                    Book Free Brand Clarity Call
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReachingGoal;