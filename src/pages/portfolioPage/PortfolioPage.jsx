import React from 'react';
import SmallBanner from '../../components/common/SmallBanner';

import Portfolio from '../../components/portfolio/Portfolio';

const PortfolioPage = () => {
    return (
        <section>
            <SmallBanner content='Portfolio'/>
            <Portfolio />
        </section>
    );
};

export default PortfolioPage;