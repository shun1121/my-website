import React, { FC } from 'react';
import PortfolioSection from '@/components/Portfolio/PortfolioSection';
import { portfolio } from '@/components/Portfolio/PortfolioList';

const Portfolio: FC = () => {
  return (
    <div>
      <PortfolioSection portfolioSection={portfolio} />
    </div>
  )
}

export default Portfolio