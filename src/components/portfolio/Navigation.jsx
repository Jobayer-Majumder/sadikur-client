import React from 'react';

const Navigation = ({tab, handleNavigation}) => {

    return (
        <section>
            <div className="max-w-5xl px-4 sm:px-6 m-auto py-20">
                <div className="flex justify-center gap-2 md:gap-10">
                    <button onClick={handleNavigation} value='all' className={`px-4 md:px-8 py-2 text-md md:text-xl duration-500 rounded-full ${tab === 'all' ? 'bg-brand text-white' : 'hover:text-brand'}`}>
                        All
                    </button>
                    <button onClick={handleNavigation} value='logo' className={`px-4 md:px-8 py-2 text-md md:text-xl duration-500 rounded-full ${tab === 'logo' ? 'bg-brand text-white' : 'hover:text-brand'}`}>
                        Logo
                    </button>
                    <button onClick={handleNavigation} value='web' className={`px-4 md:px-8 py-2 text-md md:text-xl duration-500 rounded-full ${tab === 'web' ? 'bg-brand text-white' : 'hover:text-brand'}`}>
                        Web
                    </button>
                    <button onClick={handleNavigation} value='brand' className={`px-4 md:px-8 py-2 text-md md:text-xl duration-500 rounded-full ${tab === 'brand' ? 'bg-brand text-white' : 'hover:text-brand'}`}>
                        Brand
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Navigation;