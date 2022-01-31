import React from 'react';
import { serviceCardData } from './serviceCardData';
import SingleCard from './SingleCard';

const ServiceCard = () => {
    return (
        <section className=''>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-12">
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                    Creative Branding & Design Services
                </h1>
                <hr className='border-primary border-2 w-1/6 rounded-tl-full rounded-br-full my-8 mx-auto' />
                <p className="text-center text-sm md:text-base lg:text-xl text-gray-800">
                    We go well beyond the logo. We build purposeful brands for a better tomorrow.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
                    {
                        serviceCardData.map((service, index) => <SingleCard service={service} key={index++} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;


