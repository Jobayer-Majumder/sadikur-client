import React from 'react';
import SellingSlogan from '../../components/home/SellingSlogan/SellingSlogan';
import Services from '../../components/services/Services';

const ServicePage = () => {
    return (
        <section className='pt-20'>
            <Services />
            <SellingSlogan buttonContent='Contact'/>
        </section>
    );
};

export default ServicePage;