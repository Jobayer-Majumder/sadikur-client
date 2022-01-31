import React from 'react';
import { HiArrowSmRight } from 'react-icons/hi';

const SingleBlog = ({ blog: { img, title, content, author, publishDate } }) => {
    return (
        <div className="pt-2 pb-4 px-6 rounded-2xl bg-white shadow-lg">
            <div className='py-4 flex gap-5 justify-center md:justify-start items-center'>
                <img src={img} alt="blog banner" />
            </div>
            <div className="flex justify-between pb-3">
                <p className="bg-gray-200 rounded text-sm text-gray-600">
                    {publishDate}
                </p>
                <p className="bg-gray-200 rounded text-sm text-gray-600">
                    {author}
                </p>
            </div>
            <div className="">
                <h1 className="text-xl md:text-lg lg:text-xl text-gray-800 font-bold">
                    {title}
                </h1>
                <p className='py-3 text-lg md:text-xl text-gray-600'>
                    {content}
                </p>
                <button className="text-brand py-2 px-1 font-semibold opacity-70 hover:opacity-100">
                    READE MORE {''}
                    <HiArrowSmRight className='inline text-2xl mb-1' />
                </button>
            </div>
        </div>
    );
};

export default SingleBlog;