import React from 'react';
import { useLocation } from 'react-router';
import { communityData, followLink, overview } from './footerData';



const Footer = () => {
    const location = useLocation()

    return (
        <footer className={`${location.pathname === '/admin' && 'hidden'} bg-gray-900`}>
            <div className="max-w-7xl px-4 sm:px-6 m-auto pt-16 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-7 gap-5">
                    <div className="py-4 px-2 md:col-span-2">
                        <img src="https://justcreative.com/wp-content/uploads/2020/02/Jacob-Cass-Sidebar-Profile-Suit-min.png" alt="" />
                        <h3 className="text-brand font-semibold">
                            Sadikur Rahman - Creative Graphic Designer <br /> Based on Bangladesh
                        </h3>
                        <div className="pt-5">
                            <p className='text-sm md:text-base font-semibold text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, repellat!
                            </p>

                        </div>
                    </div>
                    <div className="py-4 px-2 md:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 pb-4">
                            <div className="">
                                <h3 className="text-xl md:text-2xl pb-2 text-gray-300 font-bold">
                                    Community
                                </h3>
                                <ul>
                                    {
                                        communityData.map((d, index) => <li key={index} className='py-1.5 text-sm md:text-base font-semibold text-gray-500'>
                                            {d.title}
                                        </li>)
                                    }
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="text-xl md:text-2xl pb-2 text-gray-300 font-bold">
                                    Overview
                                </h3>
                                <ul className=''>
                                    {
                                        overview.map((d, index) => <li key={index} className='py-1.5 text-sm md:text-base font-semibold text-gray-500'>
                                            {d.title}
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                        <hr className='border-gray-800' />
                        <div className="pt-2">
                            <p className="text-center pb-3 text-sm md:text-base lg:text-xl text-gray-300 font-semibold">
                                Follow Me On
                            </p>
                            <div className="flex justify-between">
                                {
                                    followLink.map((l, index) => <a href='/' key={index}>
                                        <button className={`p-2 text-xl border border-gray-600 hover:bg-gray-100 duration-500 rounded-full`} style={{ color: `${l.color}` }}>
                                            {l.icon}
                                        </button>
                                    </a>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-2 md:col-span-2">
                        <div className="px-5 text-center">
                            <h3 className="text-xl md:text-2xl pb-2 text-gray-300 font-bold">
                                Download the FREE Branding Briefcase & Grow Your Business
                            </h3>
                            <p className='text-sm md:text-base font-semibold text-gray-500'>
                                Get access to 100's of branding, design & business resources including a mini course on branding
                            </p>

                            <div className="py-3">
                                <input className='px-4 py-4 border-2 border-gray-200 focus:border-primary duration-500 rounded-md outline-none w-full' type="email" name="email" id="" placeholder='Enter Your Email Here.' />
                                <button className='w-full px-6 py-4 mt-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                                    Yes, Please
                                </button>
                                <p className="text-gray-500 pt-2">
                                    100% Privacy - No spam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-800' />
                <div className="flex flex-col md:flex-row text-gray-600 justify-between items-center">
                    <div className="">
                        <h3 className="text-lg">
                            <span className="">© </span>{new Date().getFullYear()} Sadikur Rahman <small>(Parchment Design Co.)</small>
                        </h3>
                    </div>
                    <div className='text-center'>
                        <h3 className="text-lg">Powered By {''}
                            <a href="https://jobayermajumder.netlify.app/" className='underline text-blue-400' target='_blank' rel='noreferrer'>Jobayer Majumder</a> {''}
                            <small>(MERN Stack Developer)</small>
                        </h3>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;