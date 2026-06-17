import React from 'react';
import styled from 'styled-components';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
          <ActionGroupDesktop>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroupDesktop>
        <Logo />
          <SubscribeGroup>
            <SubscribeButton>
              Subscribe
            </SubscribeButton>
            <SubscribeLink  href="#">
              Already a subscriber?
            </SubscribeLink>
          </SubscribeGroup>

      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media screen and (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;
  @media screen and (${QUERIES.laptopAndUp}) {
    display: flex;
    gap: 24px;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupDesktop = styled.div`
    display: none;
  @media screen and (${QUERIES.laptopAndUp}) {
    display: flex;
    gap: 24px;
  }

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const SubscribeGroup = styled.div`
  display: none;
  @media screen and (${QUERIES.laptopAndUp}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    padding-bottom: 4px;
  }
`;

const SubscribeButton = styled.button`
  background-color: var(--color-primary);
  border-radius: 4px;
  color: var(--color-white);
  font-family: var(--font-family-sans-serif);
  font-size: 16px;
  font-weight: var(--font-weight-bold);
  padding: 8px 28px;
  text-transform: uppercase;
`;

const SubscribeLink = styled.a`
  color: var(--color-gray-900);
  font-family: var(--font-family-serif);
  font-style: italic;
  text-decoration: underline solid var(--color-gray-900);
  padding-top: 8px;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media screen and (${QUERIES.laptopAndUp}) {
    justify-content: space-between;
  }
`;

export default Header;
