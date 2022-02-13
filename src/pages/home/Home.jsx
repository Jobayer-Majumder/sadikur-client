import React from 'react';
import About from '../../components/home/About/About';
import Banner from '../../components/home/Banner/Banner';
import BrandAdvertise from '../../components/home/BrandAdvertise/BrandAdvertise';
import BusinessSlogan from '../../components/home/BusinessSlogan/BusinessSlogan';
import Counter from '../../components/home/Counter/Counter';
import LatestBlog from '../../components/home/LatestBlog/LatestBlog';
import LatestWork from '../../components/home/LatestWork/LatestWork';
import ReachingGoal from '../../components/home/ReachingGoal/ReachingGoal';
import SellingSlogan from '../../components/home/SellingSlogan/SellingSlogan';
import ServiceCard from '../../components/home/ServiceCard/ServiceCard';
import ServiceOverview from '../../components/home/ServiceOverview/ServiceOverview';
import Subscribe from '../../components/home/Subscribe/Subscribe';
import Testimonials from '../../components/home/Testimonials/Testimonials';

const Home = () => {

    return (
        <section>
            <header className="pt-20">
                <Banner />
            </header>

            <Subscribe />
            <ServiceOverview />
            <BrandAdvertise />
            <ServiceCard />
            <BusinessSlogan />
            <ReachingGoal />
            <About />
            <LatestWork />
            <Counter />
            <Testimonials />
            <LatestBlog />
            <SellingSlogan buttonContent='Book Free Brand Clarity Call'/>
        </section>
    );
};

export default Home;