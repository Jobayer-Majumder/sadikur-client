import React from 'react';
import { Link } from "react-router-dom";






const Sidebar = ({ item }) => {

    const { name, to, icon } = item;


    console.log(item)

    return (
        <>
            <ul className="md:flex-col md:min-w-full flex flex-col gap-3 list-none md:mb-4">
                <li className="text-left">
                    <Link
                        className={
                            "uppercase py-3 font-bold block hover:bg-indigo-500 duration-500 px-3 rounded-lg"
                        }
                        to={to}

                    >
                        <div className="flex gap-2 justify-start items-center">
                            <h2
                                className=''
                            >{icon}</h2>{" "}
                            <span className="hidden lg:block">
                                {name}
                            </span>
                        </div>
                    </Link>
                </li>
            </ul>

        </>
    );
};

export default Sidebar;


