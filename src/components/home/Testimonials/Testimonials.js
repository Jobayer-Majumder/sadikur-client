import React from 'react';
import { useQuery, gql } from '@apollo/client';
import SingleTestimonial from './SingleTestimonial';

const GET_REVIEWS = gql`
  query {
    reviews{
        _id
        name
        img
        company
        comment
        review
    }
  }
`;

const Testimonials = () => {
    const { loading, data } = useQuery(GET_REVIEWS);

    console.log(data?.reviews)

    return (
        <section>
            <div className="max-w-7xl px-4 sm:px-6 m-auto py-20">
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold text-gray-800">
                    What Our Customers Say
                </h1>
                <hr className='border-primary border-2 w-1/6 rounded-tl-full rounded-br-full my-8 mx-auto' />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {
                        data?.reviews?.map((review, index) => <SingleTestimonial review={review} key={index} />)
                    }

                </div>
                {
                    loading && <div className='py-20 flex justify-center items-center'>
                        <h3 className='text-brand'>Loading...</h3>
                    </div>
                }
                <div className="text-center pt-5">
                    <button className='mt-4 px-6 py-4 font-bold hover:shadow-brand hover:-translate-y-2 duration-300 transform text-white bg-primary rounded-full'>
                        View All Testimonials
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;