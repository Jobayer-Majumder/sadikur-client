import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({isOpenMenu}) => {

    return (
        <nav className={`absolute ${isOpenMenu ? 'left-0' : '-left-10'}  w-full duration-1000 bg-white`}>
            <div class="justify-between items-center w-full" id="mobile-menu-2">
                <ul class="flex flex-col text-center mt-4 font-semibold">
                    <li>
                        <Link to="/about" class="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white" aria-current="page">About</Link>
                    </li>
                    <li>
                        <Link to="/services" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100">Services</Link>
                    </li>
                    <li>
                        <Link to="/portfolio" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blogs" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 ">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MobileNav;