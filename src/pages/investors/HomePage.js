import React from 'react';
import styled from 'styled-components';

import bg from '../../assets/img/41.png';
import Hero from '../../components/Hero';
import { HireLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import insight from '../../assets/img/38.png';
import diligence from '../../assets/img/39.png';
import business from '../../assets/img/40.png';
import businesses from '../../data/businesses';
import BusinessCardDetails from '../../components/BusinessCardDetails';
import Accordion, { Tab } from '../../components/Accordion';
import useTab from '../../hooks/useTabs';
import Categories from '../../globals/toolbar/Categories';

function HomePage() {
  const [tabs, changeTabs] = useTab([
    'money',
    'security',
    'number',
    'duration',
  ]);
  return (
    <Wrapper>
      <Categories />
      <Hero img={bg} pos="cover">
        <div className="hero">
          <h1>We're Optimistic</h1>
          <div className="txt">
            <p>Fueling business growth is one of the main principles</p>
            <p>of our work. Grow your investment without looking</p>
            <p>too far</p>
          </div>
          <HireLink>Start Investing</HireLink>
        </div>
      </Hero>
      <article className="indexSection">
        <div className="row">
          <div className="box">
            <img src={insight} alt="img png" />
            <h3>The Business Insight</h3>
            <div className="txt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                praesentium quos. Quis corporis delectus pariatur quod quisquam,
                voluptas nisi fuga amet minus! Laudantium non assumenda
                necessitatibus ex autem aperiam eligendi.Qui repellat, nisi
                accusamus architecto dolor animi ratione laborum magnam
                laudantium laboriosam in cumque obcaecati
              </p>
            </div>
          </div>
          <div className="box">
            <img src={diligence} alt="img png" />
            <h3>Due Diligence</h3>
            <div className="txt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                praesentium quos. Quis corporis delectus pariatur quod quisquam,
                voluptas nisi fuga amet minus! Laudantium non assumenda
                necessitatibus ex autem aperiam eligendi.Qui repellat, nisi
                accusamus architecto dolor animi ratione laborum magnam
              </p>
            </div>
          </div>
          <div className="box">
            <img src={business} alt="img png" />
            <h3>Back The Business</h3>
            <div className="txt">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                praesentium quos. Quis corporis delectus pariatur quod quisquam,
                voluptas nisi fuga amet minus! Laudantium non assumenda
                necessitatibus ex autem aperiam eligendi.Qui repellat, nisi
                accusamus architecto dolor animi ratione laborum magnam
              </p>
            </div>
          </div>
        </div>
        <div className="simple">
          <h1>It is Simple</h1>
          <div className="txt">
            <p>The global economy demands innovation as well as enablement</p>
            <p>
              we have created a room where the business meets the investments
            </p>
            <p>connecting the opportunities</p>
          </div>
        </div>
      </article>
      <article className="secondSection">
        <div className="heading">
          <h1>Pitches</h1>
        </div>
        <div className="grid one">
          {businesses.slice(0, 4).map((business, index) => (
            <BusinessCardDetails business={business} index={index} />
          ))}
        </div>
        <div className="heading">
          <h1>Find Out More</h1>
        </div>
        <div className="grid two">
          {businesses.slice(0, 4).map((business, index) => (
            <BusinessCardDetails
              business={business}
              index={index}
              raised={false}
            />
          ))}
        </div>
      </article>
      <article className="thirdSection">
        <div className="heading">
          <h1>Frequently Asked Questions</h1>
        </div>
        <Accordion>
          <Tab
            title="Question number one goes here"
            Content={Que}
            data={typeof tabs !== undefined ? tabs.money : false}
            page="money"
            changeTabs={changeTabs}
          />
          <Tab
            title="Question number two goes here"
            Content={Que}
            data={typeof tabs !== undefined ? tabs.security : false}
            page="security"
            changeTabs={changeTabs}
          />
          <Tab
            title="Question number three goes here"
            Content={Que}
            data={typeof tabs !== undefined ? tabs.number : false}
            page="number"
            changeTabs={changeTabs}
          />
          <Tab
            title="Question number four goes here"
            Content={Que}
            data={typeof tabs !== undefined ? tabs.duration : false}
            page="duration"
            changeTabs={changeTabs}
          />
        </Accordion>
      </article>
      <article className="fourthSection">
        <div className="txt">
          <h1>Risk Warnings</h1>
          <p>
            Investing involves risks, including loss of capital, illiquidity,
            lack of dividends and dilution, and should be done only as part of a
            diversified portfolio.
          </p>
          <p>
            Investments should only be made by investors who understand these
            risks Historical performance is not a guarantee of future results
            and investors
          </p>
          <p>
            may lose some or all of the principal invested. Rabar is targeted
            exclusively at investors who are sufficiently sophisticated to
            understand these risks and
          </p>
          <p>
            make their own investment decisions. You will only be able to invest
            via Rabar, once you are registered as sufficiently sophisticated.
            Rabar does not make
          </p>
          <p>
            investment recommendations to you. No communications from Rabar
            through this website or any other medium, should be construed as an
            investment
          </p>
          <p>
            recommendation. Further, nothing on this website shall be considered
            an offer to sell, or a solicitation of an offer to buy, any security
            to any person in any
          </p>
          <p>
            jurisdiction to whom or in which such offer, solicitation or sale is
            unlawful. Rabar does not provide legal, financial or tax advice of
            any kind. If you have any
          </p>
          <p>
            questions with respect to legal, financial or tax matters relevant
            to your interactions with Rabar, you should consult a professional
            adviser.
          </p>
        </div>
      </article>
    </Wrapper>
  );
}

const Que = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur
      maiores quam, voluptatum dolorum alias. Accusamus earum praesentium
      doloribus obcaecati, totam laboriosam quas distinctio necessitatibus porro
      doloremque ullam eligendi molestias!
    </p>
  );
};

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
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
  .indexSection {
    padding: 18rem 0 8rem;
    background-color: ${colors.colorGreyLight};
    .simple {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 2em;
        margin-bottom: 1rem;
      }
      .txt {
        text-align: center;
      }
    }
    .row {
      justify-content: center;
      margin-bottom: 8rem;
      .box {
        width: 250px;
        align-items: center;
        background-color: ${colors.colorWhite};
        padding: 2rem;
        img {
          margin-bottom: 1rem;
        }
        h3 {
          margin-bottom: 2.5rem;
        }
        .txt {
          text-align: center;
        }
      }
      .box:not(:last-child) {
        margin-right: 5rem;
      }
    }
  }
  .secondSection {
    width: 88%;
    margin: 8rem auto;

    h1 {
      font-size: 1.8em;
      margin-bottom: 2rem;
      font-family: 'OpenSans-Light';
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 26rem);
      grid-gap: 2rem;
      justify-content: center;
    }
    .one {
      margin-bottom: 8rem;
    }
  }
  .thirdSection {
    width: 60%;
    margin: 0 auto 6rem;
    .heading {
      h1 {
        text-align: center;
        font-size: 1.8em;
        margin-bottom: 3rem;
      }
    }
  }
  .fourthSection {
    font-size: 0.9em;
    padding: 10rem 0 10rem 10rem;
    color: ${colors.navBarBlue};
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 768px) {
    .hero {
      padding-left: 0;
    }
    .indexSection {
      padding: 5rem 0;
      .row {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .box {
          margin-right: 0 !important;
        }
        .box:not(:last-child) {
          margin-bottom: 1.5rem;
        }
      }
      .simple {
        width: 90%;
        margin: 0 auto;
      }
    }
    .secondSection {
      .heading {
        text-align: center;
      }
      .grid {
        width: 100%;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50%;
        margin-right: -50%;
        touch-action: manipulation;
        scroll-snap-type: x mandatory;
        overflow: auto;
        overflow-y: hidden;
        scrollbar-width: none;
        display: grid;
        grid-auto-flow: column;
        grid-gap: 1.6rem;
        padding-left: 2.4rem;
        scroll-padding: 2.4rem;
        grid-auto-columns: 70%;
        justify-content: flex-start;
        grid-template-columns: none;
        &::-webkit-scrollbar {
          width: 0;
        }
      }
    }
    .thirdSection {
      width: 80%;
    }
    .fourthSection {
      padding: 6rem 3rem;
      margin: 0 auto;
    }
  }
`;

export default HomePage;
