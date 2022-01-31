import React from 'react';

const SpinLoader = () => {
    return (
        <div className='relative'>
            <div className={`absolute inset-y-2/4 h-8 w-8 border border-t-8 border-gray-300 rounded-full animate-spin`}></div>
        </div>
    );
};

export default SpinLoader;