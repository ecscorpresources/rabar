import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import colors from '../../config/colors';

export default function Categories() {
  let history = useHistory();

  const handleClick = (url) => {
    history.push(url);
  };

  const scroll = (top, left) => {
    window.scroll({
      top,
      left,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <ul>
        <li
          onClick={() => {
            handleClick('/');
            scroll(550, 0);
          }}
        >
          <div className="box">
            <h6>Start Investing funds now</h6>
            <p>View pitches, engage entrepreneurs,</p>
            <p>invest</p>
          </div>
        </li>
        <li
          onClick={() => {
            handleClick('/business_home');
          }}
        >
          <div className="box">
            <h6>Raise funds</h6>
            <p>Learn about crowdfunding & apply to raise funds</p>
          </div>
        </li>
        <li
          onClick={() => {
            handleClick('/shares');
          }}
        >
          <div className="box">
            <h6>Secondary Market</h6>
            <p>Buy & Sell shares in some of the hottest startups</p>
          </div>
        </li>
        <li
          onClick={() => {
            handleClick('/investors_home');
          }}
        >
          <div className="box">
            <h6>How to Invest</h6>
            <p>Buy & Sell shares in some of the hottest startups</p>
          </div>
        </li>
        <li
          onClick={() => {
            handleClick('/partners_home');
          }}
        >
          <div className="box">
            <h6>Partner with us</h6>
            <p>Buy & Sell shares in some of the hottest startups</p>
          </div>
        </li>
        <li
          onClick={() => {
            handleClick('/supports');
          }}
        >
          <div className="box">
            <h6>Support Center</h6>
            <p>Buy & Sell shares in some of the hottest startups</p>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  color: ${colors.textColor};
  position: absolute;
  left: 30px;
  background-color: ${colors.colorGreyLight};
  @media only screen and (max-width: 768px) {
    display: none;
  }
  ul {
    padding: 3.5rem 3rem 2rem;

    li {
      padding-bottom: 0.5rem;
      cursor: pointer;
      .box {
        p {
          color: ${colors.colorOcean};
          font-size: 0.8em;
          width: 85%;
        }
      }
      &:hover {
        border-bottom: 2px solid ${colors.colorOcean};
      }
    }
    li:not(:last-child) {
      margin-bottom: 1.3rem;
    }
  }
`;
