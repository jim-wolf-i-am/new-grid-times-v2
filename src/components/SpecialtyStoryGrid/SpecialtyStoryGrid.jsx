import React from 'react';
import styled from 'styled-components';

import { MARKET_DATA, SPORTS_STORIES } from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import { QUERIES } from '../../constants';

const SpecialtyStoryGrid = () => {
  return (
    <Wrapper>
      <MarketsSection>
        <SectionTitle
          cornerLink={{
            href: '/markets',
            content: 'Visit Markets data »',
          }}
        >
          Markets
        </SectionTitle>
        <MarketCards>
          {MARKET_DATA.map((data) => (
            <MarketCard key={data.tickerSymbol} {...data} />
          ))}
        </MarketCards>
      </MarketsSection>
      <SportsSection>
        <SectionTitle
          cornerLink={{
            href: '/sports',
            content: 'Visit Sports page »',
          }}
        >
          Sports
        </SectionTitle>
        <SportsStories>
          {SPORTS_STORIES.map((data) => (
            <MiniStory key={data.id} {...data} />
          ))}
        </SportsStories>
      </SportsSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fill, minmax(min(810px, 100%), 1fr));
  @media screen and ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(2, 50%);
    overflow: clip;
    gap: 0;
  }
`;

const MarketsSection = styled.section`
@media screen and ${QUERIES.laptopAndUp}{
  padding-right: 24px;
}
`;

const MarketCards = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(160px, 100%), 1fr));
`;

const SportsSection = styled.section`
@media screen and ${QUERIES.laptopAndUp}{
  padding-left: 24px;
  border-left: 1px solid var(--color-gray-300);
}
`;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(min(160px, 100%), 1fr));
  @media screen and ${QUERIES.tabletAndUp} {
    display: flex;
    white-space: nowrap;
    overflow: auto;
    padding-bottom: 10px;
    a{
      white-space: wrap;
    }
  }
`;

export default SpecialtyStoryGrid;
