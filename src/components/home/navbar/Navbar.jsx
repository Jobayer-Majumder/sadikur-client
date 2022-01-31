import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';


const Navbar = () => {
    const location = useLocation();

    
    return (
        <nav className={`${location.pathname === '/admin' && 'hidden' } shadow-sm sticky`}>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-6">
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7 justify-center items-center">
                    <div className="col-span-1 md:col-span-2 lg:col-span-2">
                        <Link to='/' className='text-lg font-semibold text-gray-900'>
                            <span className='font-bold text-brand text-4xl'>Sadikur</span> Rahman
                        </Link>
                    </div>
                    <div className="col-span-2 md:col-span-4 lg:col-span-5">
                        <div className="flex justify-end gap-8">
                            <Link to="/about" className='text-xl'>About</Link>
                            <Link to="/services" className='text-xl'>Services</Link>
                            <Link to="/portfolio" className='text-xl'>Portfolio</Link>
                            <Link to="/blogs" className='text-xl'>Blogs</Link>
                            <Link to="/contact" className='text-xl'>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;