import React from 'react';
import { blogData } from './blogData';
import SingleBlog from './SingleBlog';

const LatestBlog = () => {
    return (
        <section className='bg-gray-100'>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-20">
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                    Latest Blog Articles
                </h1>
                <hr className='border-primary border-2 w-1/6 rounded-tl-full rounded-br-full mt-5 mx-auto' />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                    {
                        blogData.map((blog, index) => <SingleBlog blog={blog} key={index++} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestBlog;