import React from 'react';
import SmallBanner from '../common/SmallBanner';
import { serviceCardData } from '../home/ServiceCard/serviceCardData';
import SingleCard from '../home/ServiceCard/SingleCard';
import Faq from './faq/Faq';

const Services = () => {
    return (
        <section>
            <SmallBanner content='Services' />
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-8 md:py-20">
                <div className=" md:w-3/5 mx-auto py-10">
                    <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        We build remarkable brands
                    </h2>
                    <hr className='border-primary border-2 w-1/6 rounded-tl-full rounded-br-full my-8 mx-auto' />
                    <p className="text-center text-sm md:text-base lg:text-xl text-gray-800">
                        We combine strategy, design and growth into our brand building process so your brand cuts through the noise, delivers a clear message and gets results.
                    </p>
                    <img src="https://justcreative.com/wp-content/uploads/2021/04/strategy-design-growth-chart.svg" alt="service of sadikur rahman" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20">
                    {
                        serviceCardData.map((service, index) => <SingleCard service={service} key={index++} />)
                    }
                </div>
                <Faq />
            </div>
        </section>
    );
};

export default Services;