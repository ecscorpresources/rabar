import React from 'react';
import styled from 'styled-components';

import Hero from '../../components/Hero';
import bg from '../../assets/img/16.png';
import colors from '../../config/colors';
import logo from '../../assets/img/15.png';
import ProgressBar from '../../components/ProgressBar';
import Tabs from '../../components/Tabs';
import Brief from './Brief';
import KeyInformation from './KeyInformation';
import Teams from './Teams';
import Investors from './Investors';
import Documents from './Documents';
import { HireLink, TextInput } from '../../components/styledComponents';
import { Link } from 'react-router-dom';
import Categories from '../../globals/toolbar/Categories';

function Business() {
  return (
    <Wrapper>
      <Categories />
      <Hero img={bg} pos="left">
        <div className="hero-box">
          <div className="hero-cont">
            <div className="header">
              <h1>Rewarding Users For Data</h1>
              <h1>They Generate</h1>
            </div>
            <div className="txt">
              <p>No.1 Ecosystem Powered by</p>
              <p>Block Chain Technology</p>
            </div>
          </div>
        </div>
      </Hero>
      <section className="indexSection">
        <article className="grid-box one">
          <div className="empty-box"></div>
          <div className="company">
            <div className="row description">
              <div className="company-logo">
                <img src={logo} alt="logo png" />
              </div>
              <div className="name">
                <p>Company Name</p>
                <p>Project Name</p>
              </div>
            </div>
            <div className="progress">
              <ProgressBar completed={19} ht="25px" rd="0" />
            </div>
            <div className="raised">
              <div className="row">
                <p>Raised -</p>
                <p>$97,000(19%)</p>
              </div>
              <div className="divider"></div>
              <div className="row">
                <p>Investors - </p>
                <p> 36</p>
              </div>
              <div className="divider"></div>
              <div className="row">
                <p>Days Left - </p>
                <p> 29</p>
              </div>
              <div className="divider"></div>
              <div className="row">
                <p>Target - </p>
                <p> $500,000</p>
              </div>
            </div>
          </div>
        </article>
        <article className="grid-box two">
          <div>
            <div className="summary white-box">
              <div className="invest">
                <h4>Investment Summary</h4>
                <div className="txt">
                  <p>Investment Type</p>
                  <p>Discount</p>
                  <p>Tax relief</p>
                </div>
              </div>
              <div className="overview">
                <h4>Company Overview</h4>
                <div className="txt">
                  <p>Equity</p>
                  <p>Pre-Money Valuation</p>
                  <p>Share Price</p>
                </div>
              </div>
            </div>
            <div className="investment">
              <h6>Enter Investment Amount</h6>
              <TextInput type="text" placeholder="$0.00" />
              <HireLink>Invest</HireLink>
              <div className="txt">
                <p>view our</p>
                <Link>Risk & Investment Policy</Link>
              </div>
            </div>
          </div>

          <div className="introduction">
            <div className="intro white-box">
              <h4>Company Introduction</h4>
              <p>
                BeoN is a blockchain-based Big Data Ecosystem which rewards you,
                the users, for the data you generate.
              </p>
            </div>
            <div className="tab">
              <Tabs
                tabs={[
                  'Brief',
                  'Key Information',
                  'Team',
                  'Investors',
                  'Documents',
                  'Updates',
                  'Discussion',
                ]}
              >
                <Brief
                  key={0}
                  data={
                    {
                      /** pass data*/
                    }
                  }
                />
                <KeyInformation
                  key={1}
                  data={
                    {
                      /** pass data*/
                    }
                  }
                />
                <Teams
                  key={2}
                  data={
                    {
                      /** pass data*/
                    }
                  }
                />
                <Investors
                  key={3}
                  data={
                    {
                      /** pass data*/
                    }
                  }
                />
                <Documents
                  key={4}
                  data={
                    {
                      /** pass data*/
                    }
                  }
                />
              </Tabs>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  background-color: ${colors.colorGreyLight};
  color: ${colors.navBarBlue};
  padding-bottom: 8rem;
  .hero-box {
    display: flex;
    justify-content: center;
    margin-left: 600px;
    line-height: 1.2;
    .hero-cont {
      width: 45rem;
      background-color: ${colors.colorWhite};
      padding: 4rem 3rem;
      padding-left: 6rem;
    }
    .header {
      margin-bottom: 0.8rem;
      h1 {
        font-size: 1.4em;
      }
    }
    .txt {
      line-height: 1.4;
    }
  }
  .indexSection {
    width: 88%;
    margin: 0 auto;
    justify-content: center;
    .grid-box {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-gap: 3rem;
    }
    .one {
      margin-bottom: 80px;
      .company {
        position: relative;
        top: -60px;
        margin-bottom: -60px;
        .description {
          align-items: flex-end;
          margin-bottom: 2.5rem;
          .company-logo {
            background-color: #fff;
            width: 125px;
            height: 125px;
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 100%;
            }
          }
          .name {
            margin-left: 1rem;
            p:nth-child(1) {
              font-weight: bold;
              font-size: 1.1em;
              margin-bottom: 0.3rem;
            }
            p:nth-child(2) {
              font-size: 1.3em;
            }
          }
        }
        .progress {
          margin-bottom: 0.6rem;
        }
        .raised {
          display: flex;
          align-items: center;
          .divider {
            background-color: ${colors.navBarBlue};
            width: 2px;
            height: 25px;
            margin: 0 2rem;
          }
          .row {
            p:nth-child(1) {
              font-weight: bold;
            }
          }
        }
      }
    }
    .two {
      h4 {
        font-size: 1.2em;
      }
      .white-box {
        background-color: ${colors.colorWhite};
        padding: 2rem;
        h4 {
          margin-bottom: 1rem;
        }
      }
      .investment {
        background-color: ${colors.colorWhite};
        border: 1px solid ${colors.tabBorder};
        padding: 3rem;
        h6 {
          margin-bottom: 2rem;
        }
        input {
          margin-bottom: 2rem;
        }
        .txt {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          p {
            font-weight: bold;
            margin-right: 0.5rem;
          }
          a {
            font-size: 0.8em;
          }
        }
      }
      .summary {
        padding-bottom: 6rem;
        margin-bottom: 2rem;
        .invest {
          margin-bottom: 6rem;
        }
      }
      .introduction {
        .intro {
          margin-bottom: 3rem;
        }
        .tab {
        }
      }
    }
  }
`;

export default Business;
