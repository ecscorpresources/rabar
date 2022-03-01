import React from 'react';
import styled from 'styled-components';

import bg from '../../assets/img/56.png';
import { Tab2 } from '../../components/Accordion2';
import Accordion2 from '../../components/Accordion2';
import Hero from '../../components/Hero';
import { HireLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import useTab from '../../hooks/useTabs';
import { Link } from 'react-router-dom';
import Categories from '../../globals/toolbar/Categories';

const article = [
  {
    id: '1',
    name: 'Article Topic One is Here',
  },
  {
    id: '2',
    name: 'Article Topic Two is Here',
  },
  {
    id: '3',
    name: 'Article Topic Three is Here',
  },
  {
    id: '4',
    name: 'Article Topic Four is Here',
  },
];

function Support() {
  const [tabs, changeTabs] = useTab([
    'raising',
    'market',
    'risk',
    'partners',
    'sponsor',
  ]);
  return (
    <Wrapper>
      <Categories />
      <SupportHero />
      <section className="indexSection">
        <h1>Support Center</h1>
        <div className="txt">
          <p>Fueling business growth is one of the main principles</p>
          <p>of our work. Grow your investment without looking</p>
          <p>too far</p>
        </div>
      </section>
      <section className="secondSection">
        <Accordion2>
          <Tab2
            title="Raising Fund For a Project"
            Content={Raising}
            changeTabs={changeTabs}
            data={typeof tabs !== undefined ? tabs.raising : false}
            page="raising"
          />
          <Tab2
            title="Buying & Selling on the Secondary Market"
            Content={Raising}
            changeTabs={changeTabs}
            data={typeof tabs !== undefined ? tabs.market : false}
            page="market"
          />
          <Tab2
            title="Risk Investments"
            Content={Raising}
            changeTabs={changeTabs}
            data={typeof tabs !== undefined ? tabs.risk : false}
            page="risk"
          />
          <Tab2
            title="What Partners stand to gain"
            Content={Raising}
            changeTabs={changeTabs}
            data={typeof tabs !== undefined ? tabs.partners : false}
            page="partners"
          />
          <Tab2
            title="Sponsoring a Project"
            Content={Raising}
            changeTabs={changeTabs}
            data={typeof tabs !== undefined ? tabs.sponsor : false}
            page="sponsor"
          />
        </Accordion2>
      </section>
    </Wrapper>
  );
}

const Raising = () => {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="box">
      <ul>
        {article.map((art, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleClick('/article');
              }}
            >
              <Link>{art.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const SupportHero = () => {
  return (
    <HeroWrapper>
      <Hero img={bg}>
        <div className="hero">
          <h1>Support</h1>
          <div className="txt">
            <p>Fueling business growth is one of the main principles</p>
            <p>of our work. Grow your investment without looking</p>
            <p>too far</p>
          </div>
          <HireLink>Start Investing</HireLink>
        </div>
      </Hero>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  .hero {
    padding-left: 40rem;
    color: ${colors.colorWhite};
    h1 {
      font-size: 1.8em;
      margin-bottom: 0.5rem;
    }
    .txt {
      margin-bottom: 3rem;
    }
    a {
      border-radius: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      padding-left: 0;
    }
  }
`;

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  .indexSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    h1 {
      font-size: 1.8em;
      margin-bottom: 1rem;
      font-family: 'OpenSans-Light';
    }
    .txt {
      text-align: center;
      font-weight: bold;
    }
  }
  .secondSection {
    padding: 4rem 0;
    width: 55%;
    margin: 0 auto;
    .box {
      align-items: center;
      padding: 1rem 0;
      ul {
        li {
          a {
            color: ${colors.navBarBlue};
          }
        }
        li:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .secondSection {
      width: 80%;
    }
  }
`;

export default Support;
