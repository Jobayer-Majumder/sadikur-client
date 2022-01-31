import React from 'react';
import {RiMenu2Line} from 'react-icons/ri'
import UserDropdown from './UserDropdown';

const AdminNavbar = ({menuHandler}) => {
    return (
        <nav className="text-brand top-0 left-0 flex-row flex-nowrap justify-start flex items-center py-6">
            <div className="w-full ml-auto items-center flex justify-between md:flex-nowrap flex-wrap">
                {/* Brand */}
                <a
                    className="text-sm uppercase hidden lg:inline-block font-semibold"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                >
                    Dashboard
                </a>
                <button onClick={menuHandler} className='text-2xl text-brand'>
                    <RiMenu2Line className='' />
                </button>
                {/* Form */}
                <form className="md:flex flex-row flex-wrap items-center lg:ml-auto mr-3">
                    <div className="relative flex w-full flex-wrap items-stretch">
                        <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                            <i className="fas fa-search"></i>
                        </span>
                        {/* <input
                            type="text"
                            placeholder="Search here..."
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                        /> */}
                        <h3 className="text-sm font-semibold uppercase">
                            Sowrab
                        </h3>
                    </div>
                </form>
                {/* User */}
                <ul className="flex-col md:flex-row list-none items-center flex">
                    <UserDropdown />
                </ul>
            </div>
        </nav>
    );
};

export default AdminNavbar;



