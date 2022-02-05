import React from 'react';
import { ImHome } from 'react-icons/im';
import { RiLogoutBoxLine } from 'react-icons/ri';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AdminNavbar from '../../components/AdminPage/AdminNavbar/AdminNavbar';
import Sidebar from '../../components/AdminPage/Sidebar/Sidebar';
import MakeAdmin from '../../components/AdminPage/MakeAdmin/MakeAdmin';
import PortfolioList from '../../components/AdminPage/PortfolioList/PortfolioList';
import { menuItems } from '../../components/AdminPage/Sidebar/sidebarData';
import AddDesign from '../../components/AdminPage/AddDesign/AddDesign';
import UserList from '../../components/AdminPage/UserList/UserList';



const AdminPage = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <section>
            <Router>
                <div className="grid md:grid-cols-8 lg:grid-cols-6">
                    <div className={`md:col-span-1 lg:col-span-1`} >
                        <nav className={`hide-scroll hidden md:block text-gray-300 md:w-1/12 lg:w-1/6 duration-500 left-0 fixed top-0 bottom-0 overflow-y-auto flex-row overflow-hidden items-center justify-between z-10 py-4 lg:px-4`} style={{ backgroundColor: '#2d3e4e' }}>
                            <div className="flex-col items-stretch px-0 flex justify-between">

                                <Link
                                    className="text-center lg:text-left mr-0 whitespace-nowrap hover:text-brand uppercase font-bold pt-4 pb-10 px-3"
                                    to="/"
                                >
                                    <ImHome className='inline mr-2 mb-1' />
                                    <span className="hidden lg:inline-block">
                                        Logo Maker
                                    </span>

                                </Link>
                                {
                                    menuItems.map((item, index) =>
                                        <Sidebar item={item} key={index} />
                                    )
                                }

                                <div className="text-left">
                                    <Link
                                        className="uppercase py-3 font-bold block hover:bg-red-600 duration-500 px-3 rounded-lg"
                                        to="/auth/login"
                                    >
                                        <div className="flex gap-2 justify-start items-center">
                                            <RiLogoutBoxLine className="" />{" "}
                                            <span className="hidden lg:block">
                                                Logout
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </nav>

                    </div>
                    <div className="md:col-span-7 lg:col-span-5 bg-gray-100">
                        <div className="max-w-6xl px-4 lg:px-12 m-auto">
                            <AdminNavbar menuHandler={menuHandler} />
                            <div className="bg-white h-screen py-4 px-2 lg:px-4 rounded-lg">
                                <Switch>
                                    <Route path="/admin/design_list">
                                        <PortfolioList />
                                    </Route>
                                    <Route path="/admin/make_admin">
                                        <MakeAdmin />
                                    </Route>
                                    <Route path="/admin/add_design">
                                        <AddDesign />
                                    </Route>
                                    <Route path="/admin/user_list">
                                        <UserList />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </section>
    );
};

export default AdminPage;




