import React, { FC } from 'react';
import { HeaderSimple } from '../components/header';
import { links } from '../components/link';
import { Footer } from '../components/footer';
import PortfolioSection from '../components/portfolioSection';
import { portfolio } from '../components/portfolioList';

const Portfolio: FC = () => {
  return (
    <div>
      <HeaderSimple links={links} />
      <PortfolioSection portfolioSection={portfolio} />
      <Footer />
    </div>
  )
}

export default Portfolio