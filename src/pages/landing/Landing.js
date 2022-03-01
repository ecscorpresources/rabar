import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import { BtnLink } from '../../components/styledComponents';
import colors from '../../config/colors';
import innov from '../../assets/img/02.png';
import manu from '../../assets/img/03.png';
import housing from '../../assets/img/04.png';
import businesses from '../../data/businesses';
import BusinessCardDetails from '../../components/BusinessCardDetails';
import Categories from '../../globals/toolbar/Categories';

function Landing() {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <Categories />
      <Hero>
        <div className="hero">
          <div className="txt">
            <h1>Innovation fast tracks the global market growth</h1>
            <p>
              Start funding a business & change the narrative for empowerment
            </p>
            <p>building business and investment</p>
          </div>
          <BtnLink
            onClick={() => {
              handleClick('/#invest');
            }}
          >
            Start Now
          </BtnLink>
        </div>
      </Hero>
      <article className="indexSection">
        <h1 className="head">Featured Section</h1>
        <div className="grid">
          <Featured img={innov}>
            <div className="txt">
              <h1>Innovation & Technology</h1>
              <p>Fuel your Innovative and Technological</p>
              <p>projects and ideas to the world with</p>
              <p>the help of Internet users via crowd</p>
              <p>funding</p>
            </div>
          </Featured>
          <Featured img={manu}>
            <div className="txt">
              <h1>FMCG & Manufacturing</h1>
              <p>Bring your goods to the spotlight,</p>
              <p>crowd funding raises awareness among</p>
              <p>the general consumer population</p>
              <p>about companies and their products</p>
            </div>
          </Featured>
          <Featured img={housing}>
            <div className="txt">
              <h1>Affordable Housing</h1>
              <p>Secure a value investment that suits</p>
              <p>you by getting an Affordable property,</p>
              <p>with the coming together of other like-</p>
              <p>minded investors</p>
            </div>
          </Featured>
        </div>
      </article>
      <article className="article secondSection" id="invest">
        {businesses.map((business, index) => (
          <BusinessCardDetails business={business} index={index} />
        ))}
      </article>
      <article className="thirdSection">
        <div className="header">
          <h1>Fast Track Your Idea</h1>
        </div>
        <div className="txt">
          <p>
            As an investor aggregator, you are one step closer to achieving your
            dream
          </p>
          <p>
            Sparking the inspiration of innovation to fix existing day to day
            challenges,
          </p>
          <p>
            Rabar is here to partner & help millions of people in the community
            to bring life
          </p>
          <p>to their aspiration.</p>
        </div>
        <div className="txt">
          <p>
            Free platform for Creators to share their creative work & investors
            to fund their vision.
          </p>
          <p>Start a campaign and bring your ideas into reality.</p>
        </div>
        <BtnLink hallwidth="20ren" to="/fund">
          Join The Community
        </BtnLink>
      </article>
      <div className="fourthSection">
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
      </div>
    </Wrapper>
  );
}

const Featured = ({ img, children }) => {
  return (
    <div className="featured">
      <div className="img-container">
        <img src={img} alt="png" />
      </div>
      {children}
    </div>
  );
};

const Wrapper = styled.section`
  font-size: 1.4em;
  color: ${colors.navBarBlue};
  .hero {
    padding-left: 40rem;
    color: ${colors.navBarBlue};
    .txt {
      margin-bottom: 3rem;
      h1 {
        font-size: 1.4em;
        font-family: 'OpenSans-Light';
        margin-bottom: 0.7rem;
      }
    }
  }
  .indexSection {
    width: 90%;
    margin: 5rem auto 8rem;
    padding-left: 25rem;
    .head {
      font-size: 1.3em;
      margin-bottom: 1rem;
      padding-left: 7rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 27rem 27rem 27rem;
      align-items: center;
      justify-content: center;
      grid-gap: 1.5rem;

      .featured {
        background-color: ${colors.buttonBackground};
        display: flex;
        align-items: center;
        border-radius: 10px;
        padding: 1rem 0.6rem;
        .txt {
          margin-left: 0.5rem;
          h1 {
            font-size: 1.1em;
            font-family: 'OpenSans-Light';
          }
          p {
            font-size: 0.7em;
          }
        }
      }
    }
  }
  .secondSection {
    width: 88%;
    margin: 0 auto 8rem;
    display: grid;
    grid-template-columns: repeat(4, 26rem);
    grid-gap: 2rem;
    justify-content: center;
  }
  .thirdSection {
    background-color: ${colors.colorGreyLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.1em;
    padding: 10rem 0;
    color: ${colors.navBarBlue};
    .header {
      margin-bottom: 1.5rem;
      h1 {
        font-size: 1.7em;
      }
    }
    .txt {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .txt:nth-child(3) {
      margin-bottom: 4rem;
    }
    a {
      border: 2px solid ${colors.navBarBlue};
      background-color: ${colors.colorWhite};
      font-weight: bold;
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
      width: 90%;
      margin: 0 auto;
    }
    .indexSection {
      padding-left: 0;
      .head {
        text-align: center;
        font-size: 1.5em;
        padding-left: 0;
      }
      .grid {
        grid-template-columns: 30rem;
        .featured {
          .img-container {
            width: 35px;
            img {
              width: 100%;
            }
          }
          flex-direction: column;
          padding: 0;
          padding-bottom: 1rem;
          .txt {
            text-align: center;
            h1 {
              font-size: 1.2em;
              font-family: 'OpenSans', sans-serif;
            }
            p {
              font-size: 0.9em;
            }
          }
        }
      }
    }
    .secondSection {
      grid-template-columns: repeat(2, 26rem);
    }
  }
`;

export default Landing;
