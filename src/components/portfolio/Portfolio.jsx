import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_WORKS_BY_CATEGORY } from '../../graphql/queries/queries';
import Navigation from './Navigation';
import SingleWork from './SingleWork';



const Portfolio = () => {
    const [tab, setTab] = React.useState('all');
    const { loading, data } = useQuery(GET_WORKS_BY_CATEGORY, {
        variables: { bred: tab }
    });

    const handleNavigation = e => {
        setTab(e.target.value)
    }


    return (
        <section>
            <Navigation tab={tab} handleNavigation={handleNavigation} />

            <div className="max-w-7xl px-4 sm:px-6 m-auto pt-4 md:pt-8 pb-40">
                {
                    loading && <h3 className='text-center text-3xl text-brand'>loading...</h3>
                }
                {
                    data?.worksByCategory.length <= 0 ?
                        <p className='text-base md:text-xl text-brand font-semibold text-center'>No items in {tab} category!</p> : null
                }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        data?.worksByCategory.map((work, index) => <SingleWork work={work} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;