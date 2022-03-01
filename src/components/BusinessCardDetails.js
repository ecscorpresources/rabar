import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../config/colors';

import ProgressBar from './ProgressBar';

function BusinessCardDetails({ business, index, raised = true }) {
  const handleClick = (url) => {
    window.location.href = url;
  };
  return (
    <Wrapper>
      <article
        className="business"
        key={index}
        onClick={() => {
          handleClick('/business');
        }}
      >
        <div className="social">
          {business.social
            ? business.social.map((social, index) => (
                <img src={social} alt="png" key={index} />
              ))
            : null}
        </div>
        <div className="row logo">
          <div className="logo-container">
            <img src={business.logo} alt="logo png" />
          </div>
          <p>{business.name}</p>
        </div>
        <div className="bg">
          <img src={business.bg} alt="png" />
        </div>
        <div className="details">
          <div className="txt">
            <p className="">{business.details}</p>
          </div>
          <div className="read-more">
            <Link>Read More</Link>
          </div>
        </div>
        {raised ? (
          <div className="bottom">
            <div className="row raised">
              <div className="box">
                <p>Raised</p>
                <p>
                  ${business.raised} ({business.raisedPer}%)
                </p>
              </div>
              <div className="box">
                <p>Target</p>
                <p>${business.target}</p>
              </div>
            </div>
            <div className="progress">
              <ProgressBar
                completed={business.raisedPer <= 100 ? business.raisedPer : 100}
              />
            </div>
            <div className="row investors">
              <div className="box">
                <p>Investors</p>
                <p>{business.investors}</p>
              </div>
              <div className="box">
                <p>{business.daysLeft} days left</p>
              </div>
            </div>
          </div>
        ) : null}
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .business {
    border: 1px solid ${colors.borderColor};
    border-radius: 4px;
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    height: inherit;
    cursor: pointer;
    .social {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0.7rem;
      img:not(:last-child) {
        margin-right: 0.7rem;
      }
    }
    .logo {
      padding-left: 2rem;
      align-items: center;
      position: relative;
      top: 30px;
      margin-top: -30px;
      .logo-container {
        width: 70px;
        height: 70px;
        border-radius: 35px;
        overflow: hidden;
        margin-right: 1rem;
        img {
          width: 100%;
        }
      }
      p {
        font-weight: bold;
        margin-bottom: 2rem;
        font-size: 0.9em;
      }
    }
    .bg {
      margin-bottom: 1rem;
      img {
        width: 100%;
      }
    }
    .details {
      padding: 0 1.5rem;
      margin-bottom: 1.5rem;
      .txt {
        margin-bottom: 1.5rem;

        font-size: 0.85em;
        .hide {
          display: none;
        }
        .show {
          display: inline;
        }
      }
      .read-more {
        font-weight: bold;
        font-size: 0.8em;
        a {
          color: ${colors.colorBlack};
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .bottom {
      margin-top: auto;
      .raised {
        padding: 0 1.5rem;
        justify-content: space-between;
        .box {
          p:nth-child(1) {
            font-size: 0.8em;
            font-weight: bold;
          }
        }
      }
      .progress {
        padding: 0 1.5rem;
        margin: 0.7rem 0;
      }
      .investors {
        padding: 0 1.5rem 1rem;
        justify-content: space-between;
        .box {
          p:nth-child(1) {
            font-size: 0.8em;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

export default BusinessCardDetails;
