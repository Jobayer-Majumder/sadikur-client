import React from 'react';

const MakeAdmin = () => {
    return (
        <section className="min-h-screen flex flex-col ">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg bg-gray-100 shadow px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <div className="flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Oikya_Front_Logo.png/480px-Oikya_Front_Logo.png" alt="" className="h-32" />
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-brand">
                                Make Admin
                            </h1>
                        </div>
                        <div className="py-2 text-left">
                            <input type="text" className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Full Name" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="email" className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Email" />
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" className="bg-gray-200 border border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-brand focus:bg-white" placeholder="Password" />
                        </div>
                        <div className="py-2">
                            <button type="submit" className="focus:outline-none focus:ring-2 bg-brand text-white font-bold tracking-wider block w-full p-2 rounded-lg">
                                Make Admin
                            </button>
                        </div>
                    </form>
                    {/* <div className="text-center">
                        <a href="/" className="hover:underline">Forgot password?</a>
                    </div>
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span> {``}
                        <a href="/" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;