import React from 'react';
import './pageLoader.css';

const PageLoader = () => {
    return (
        <div className='h-screen'>
            <div class="gooey">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;