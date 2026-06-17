import React from 'react';
import styled from 'styled-components';

import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <a href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background-image: linear-gradient(to right, var(--color-gray-300), var(--color-gray-300));
	background-repeat: no-repeat;
	background-size: 100% 1px;
	background-position: bottom center;
	padding-bottom: 10px;
	margin-bottom: 16px;
  a:last-of-type & {
    background-image: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  @media screen and ${QUERIES.tabletOnly} {
    flex-direction: column;
    background: none;
  }
  @media screen and ${QUERIES.laptopAndUp} {
    padding-bottom: 20px;
    margin-bottom: 0;
  }

`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
