import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import MobileNav from './MobileNav';
// import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {
    const location = useLocation();

    const [isOpenMenu, setIsOpenMenu] = React.useState(false);


    return (
        <nav className={`${location.pathname === '/admin' && 'hidden'} fixed shadow-sm w-full text-gray-800 bg-white z-50`}>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-2">
                <div className="grid grid-cols-2 md:grid-cols-7 lg:grid-cols-7 justify-center items-center">
                    <div className="md:col-span-3 lg:col-span-2">
                        <Link to='/' className='text-lg font-semibold text-gray-900'>
                            <img className='h-20' src="https://cdn.truelancer.com/upload-full/711224-gps-design-logo---Copy-01.png" alt="brand logo" />
                        </Link>
                    </div>
                    <div className="md:col-span-4 lg:col-span-5">
                        <div className="hidden md:flex justify-end gap-1 lg:gap-4 items-center font-semibold">
                            <Link to="/about" className='px-4 py-2 rounded-md hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>About</Link>
                            <Link to="/services" className='px-4 py-2 rounded-md hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Services</Link>
                            <Link to="/portfolio" className='px-4 py-2 rounded-md hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Portfolio</Link>
                            <Link to="/blogs" className='px-4 py-2 rounded-md hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Blogs</Link>
                            <Link to="/contact" className='px-4 py-2 rounded-md hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Contact</Link>
                            <Link to="/login" className='px-4 py-2 border rounded-md hover:text-white hover:bg-brand'>Login</Link>
                        </div>
                        <div className="flex justify-end items-center">
                            {
                                isOpenMenu ? <button onClick={() => setIsOpenMenu(!isOpenMenu)} className='md:hidden hover:bg-red-500 hover:text-white rounded-full px-2 py-2'>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button> :
                                    <button onClick={() => setIsOpenMenu(!isOpenMenu)} className='md:hidden hover:bg-gray-100 focus:bg-gray-200 rounded-full px-2 py-2'>
                                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                        </svg>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
                <div className="">
                    <MobileNav menuState={{ isOpenMenu, setIsOpenMenu }} />
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
