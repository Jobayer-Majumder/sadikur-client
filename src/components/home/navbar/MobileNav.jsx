import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ menuState }) => {
    const { isOpenMenu, setIsOpenMenu } = menuState;


    return (
        <nav className={`absolute ${isOpenMenu ? 'left-0' : '-left-full'}  w-full duration-300 bg-white pb-5`}>
            <div className="justify-between items-center w-full" id="mobile-menu-2">
                <ul onClick={() => setIsOpenMenu(!isOpenMenu)} className="flex flex-col text-center mt-4 font-semibold">
                    <li>
                        <Link  to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100" aria-current="page">About</Link>
                    </li>
                    <li>
                        <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login" className='block px-4 py-2 border rounded-md hover:text-white hover:bg-brand'>Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;