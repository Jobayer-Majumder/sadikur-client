import React from 'react';

const SellingSlogan = ({ buttonContent }) => {
    return (
        <section className='bg-primary'>
            <div className="max-w-7xl px-4 sm:px-6 mx-auto py-12">
                <div className="grid grid-col-1">
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white">
                            Create a brand your customers will love!
                        </h1>
                        <button className='mt-6 px-6 py-4 font-bold hover:shadow-brand hover:-translate-y-1.5 duration-300 transform text-brand bg-white rounded-full'>
                            
                            {buttonContent}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellingSlogan;