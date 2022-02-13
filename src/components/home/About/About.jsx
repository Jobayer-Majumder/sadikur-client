import React from 'react';
import { MdDone } from 'react-icons/md';

const About = () => {

    const aboutData = [
        'Freelancers',
        'Start ups',
        'Entrepreneurs',
        'Side hustlers',
        'Corporate escapees',
        'B2B & B2C companies',
    ]


    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="">
                        <img className='rounded-md' src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sadikur's rahman creative logo designer profile" />
                        <p className="text-center md:text-left text-sm md:text-base lg:text-xl font-semibold text-gray-400 py-5">
                            <span className="text-brand font-bold">Sadikur Rahman</span> – Brand Designer, Strategist & Founder of JUST Creative: An award-winning branding & design agency specializing in brand strategy, brand design & rebranding.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-gray-800 py-5 md:py-8">
                            Who We Work With
                        </h1>
                        {
                            aboutData.map((list, index) =>
                                <ul key={index}>
                                    <li className='font-semibold text-gray-800 text-lg md:text-xl font-semibold-2 py-1'>
                                        <MdDone className='text-white inline p-1 text-2xl bg-primary rounded-full'>✓</MdDone> {''}
                                        {list}
                                    </li>
                                </ul>
                            )
                        }
                        <button className='mt-6 px-6 py-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                            Book Free Brand Clarity Call
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;