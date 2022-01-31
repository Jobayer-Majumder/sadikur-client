import React from 'react';

const SmallBanner = ({content}) => {
    return (
        <div className="flex justify-center items-center bg-gray-100" style={{ minHeight: '200px' }}>
            <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-800 font-bold">
                {content}
            </h2>
        </div>
    );
};

export default SmallBanner;