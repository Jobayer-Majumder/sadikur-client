import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { faqData } from './faqData';

const Faq = () => {
    const [navigation, setNavigation] = React.useState(false);
    const [navIndex, setNavIndex] = React.useState(0);


    const handleNavigation = index => {
        setNavigation(!navigation)
        setNavIndex(index);
    };

    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-8 md:py-20">
                <div className="">
                    <h2 className="text-center text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                        Frequently Asked Questions
                    </h2>
                    <hr className='border-primary border-2 w-1/6 rounded-tr-full rounded-bl-full my-8 mx-auto' />
                </div>
                <div className="grid grid-cols-1 md:max-w-4xl mx-auto">
                    {
                        faqData.map((d, index) =>
                            <>
                                <div onClick={() => handleNavigation(index + 1)} className="py-4 px-5 rounded-md my-2 bg-gray-100 flex gap-5 justify-start items-center cursor-pointer" key={index}>
                                    <IoIosArrowDown className={`${navigation && navIndex === d.id ? 'rotate-180 text-brand' : 'rotate-0'} duration-500 transform text-lg lg:text-xl font-semibold`} />
                                    <h2 className={`${navigation && navIndex === d.id ? 'text-brand' : 'text-gray800'} text-lg lg:text-xl font-semibold`}>
                                        {d.title}
                                    </h2>
                                </div>
                                <div className={`${navigation && navIndex === d.id ? 'visible py-4' : 'invisible'} duration-500 px-5 rounded-md bg-gray-50`}>
                                    {
                                        navigation && navIndex === d.id && <p className={`${navigation && navIndex === d.id ? 'visible' : 'invisible'} text-gray-500`}>
                                            {d.desc}
                                        </p>
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Faq;