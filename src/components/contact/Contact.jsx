import React from 'react';
import { MdEmail } from 'react-icons/md'
import contactBanner from '../../assets/svg/undraw_contact_us_15o2.svg';
import SmallBanner from '../common/SmallBanner';

const Contact = () => {
    return (
        <section>
            <SmallBanner content='Contact' />
            <div className="max-w-7xl px-4 sm:px-6 m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                    <div className="flex justify-start items-center">
                        <img src={contactBanner} alt="contact with sadikur rahman" />
                    </div>
                    <div className="">
                        <div className="pb-3.5 flex gap-2 justify-start items-enter">
                            <MdEmail className='inline mt-1.5 text-brand text-xl md:text-3xl lg:text-4xl' />
                            <h2 className="inline text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                Get in touch
                            </h2>
                        </div>
                        <p className='pb-5 text-sm md:text-base lg:text-xl font-semibold text-gray-800'>
                            Use the form below or email sadikur rahman at info@sadik.com.
                        </p>
                        <form action="" className="">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="py-3">
                                    <input type="text" className="w-full py-3 px-3 ring-2 ring-gray-300 focus:ring-brand outline-none rounded duration-500" placeholder='First Name' />
                                </div>
                                <div className="py-3">
                                    <input type="email" className="w-full py-3 px-3 ring-2 ring-gray-300 focus:ring-brand outline-none rounded duration-500" placeholder='Email' />
                                </div>
                            </div>
                            <div className="py-3">
                                <select name="" id="" className="w-full py-3 px-3 ring-2 ring-gray-300 focus:ring-brand outline-none rounded duration-500">
                                    <option value="hello">Pick One</option>
                                    <option value="hello">Argent Call</option>
                                    <option value="hello">Arrange a meeting</option>
                                    <option value="hello">For Design inquiry</option>
                                </select>
                            </div>
                            <div className="py-3">
                                <textarea name="" id="" cols="30" rows="4" className="w-full py-3 px-3 ring-2 ring-gray-300 focus:ring-brand outline-none rounded duration-500" placeholder='Type Your Message..' />
                            </div>
                            <button className='button-brand'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;