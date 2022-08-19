import React, { FC } from 'react';
import PortfolioSection from '../components/portfolioSection';
import { portfolio } from '../components/portfolioList';

const Portfolio: FC = () => {
  return (
    <div>
      <PortfolioSection portfolioSection={portfolio} />
    </div>
  )
}

export default Portfolio