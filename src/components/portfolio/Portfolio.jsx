import { useQuery, gql } from '@apollo/client';
import React from 'react';
import Navigation from './Navigation';
import SingleWork from './SingleWork';

const GET_WORKS = gql`
  query {
    works{
      title
    }
  }
`;


const Portfolio = () => {
    const [tab, setTab] = React.useState('all');
    const { loading, data } = useQuery(GET_WORKS);

    const handleNavigation = e => {
        setTab(e.target.value)
    }



    return (
        <section>
            <Navigation tab={tab} handleNavigation={handleNavigation} />

            <div className="max-w-7xl px-4 sm:px-6 m-auto pt-8 pb-40">
                {
                    loading && <h3 className='text-center text-3xl text-brand'>loading...</h3>
                }
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {
                        data?.works.map((work, index) => <SingleWork work={work} key={index} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Portfolio;