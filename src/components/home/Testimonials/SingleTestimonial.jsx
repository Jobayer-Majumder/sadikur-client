import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

const SingleTestimonial = ({ review: {name, company, comment, review, img} }) => {
    const a = ['a', 'b', 'c', 'd', 'f']
    const star = new Array(a)

    console.log(name)
    
    return (
        <div className='rounded-md shadow relative'>
            <div className="px-4 py-4 bg-gray-100">
                <p className="text-sm md:text-md lg:text-xl text-justify pb-3">{comment}</p>
            </div>
            <div className="flex px-4 py-2 gap-5 justify-center md:justify-start items-center">
                <img className='h-16 w-16 rounded-full object-cover' src='https://cdn.lifehack.org/wp-content/uploads/2014/05/HughJackman.jpg' alt="user review profile" />
                <div className="py-4">
                    <h3 className='font-semibold text-lg pb-0.5'>{name}</h3>
                    <p className='text-gray-600 text-sm'>{company}</p>
                    <div className='flex py-1 gap-1.5'>
                        {
                            star[0].map((d, index) =>

                                <BsFillStarFill className='inline text-brand' key={index} />

                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;