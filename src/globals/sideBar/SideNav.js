import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Links } from '../../components/styledComponents';
import colors from '../../config/colors';

export default function SideNav() {
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(false);
  let history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const changeRoute = (url) => {
    history.push(url);
    setOpen(!open);
  };

  const scroll = (top, left) => {
    window.scroll({
      top,
      left,
      behavior: 'smooth',
    });
    setOpen(!open);
  };

  return (
    <Wrapper>
      <div className="menu-btn" onClick={handleClick}>
        <span
          className={open ? 'menu-btn_burger open' : 'menu-btn_burger'}
        ></span>
      </div>
      <div>
        {open && (
          <div className={open ? 'aside' : 'aside open'}>
            <Links sidenav="true">
              <li
                onClick={() => {
                  changeRoute('/');
                  scroll(800, 0);
                }}
              >
                Start Investing funds now
                <p>View pitches, engage entrepreneurs, invest</p>
              </li>
              <li onClick={() => changeRoute('/business_home')}>
                Raise funds
                <p>Learn about crowdfunding & apply to raise funds</p>
              </li>
              <li onClick={() => changeRoute('/shares')}>
                Secondary Market
                <p>Buy & Sell shares in some of the hottest startups</p>
              </li>
              <li onClick={() => changeRoute('/investors_home')}>
                How to Invest
                <p>Buy & Sell shares in some of the hottest startups</p>
              </li>
              <li onClick={() => changeRoute('/partners_home')}>
                Partner with us
                <p>Buy & Sell shares in some of the hottest startups</p>
              </li>
              <li onClick={() => changeRoute('/supports')}>
                Support Center{' '}
                <p>Buy & Sell shares in some of the hottest startups</p>
              </li>
            </Links>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0.8rem 3rem;
  color: ${colors.textColor};
  font-size: 2em;
  position: absolute;
  top: 0;
  li {
    p {
      color: ${colors.colorOcean};
      font-size: 0.8em;
      width: 85%;
    }
    &:hover {
      border-bottom: 2px solid ${colors.colorOcean};
    }
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  h2 {
    margin-left: 0.6rem;
    font-family: 'AvatarNormal';
  }
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* opacity: 0.68; */
    height: 100vh;
    z-index: 2;
    background: rgb(250, 250, 250, 0.9);
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
    padding: 8rem 2rem;
  }
  .hide {
    display: none;
  }
  .menu-btn {
    position: absolute;
    z-index: 3;
    right: 1rem;
    top: 16px;
    height: 20px;
    width: 28px;
    cursor: pointer;

    .menu-btn_burger {
      position: absolute;
      right: 0;
      top: 0.5rem;
      width: 25px;
      height: 2px;
      background: #fff;
      transition: all 0.5s ease-in-out;

      &::before {
        content: '';
        position: absolute;
        top: -8px;
        width: 25px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }

      &::after {
        content: '';
        position: absolute;
        top: 8px;
        right: 0;
        width: 25px;
        height: 2px;
        background: #fff;
        transition: all 0.5s ease-in-out;
      }
      &.open {
        transform: rotate(360deg);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(5px, 8px);
          background-color: ${colors.textColor};
        }

        &::after {
          width: 25px;
          transform: rotate(-45deg) translate(3px, -7px);
          background-color: ${colors.textColor};
        }
      }
    }
  }
  @media (max-width: 305px) {
    .menu-btn {
      top: 10px;
    }
  }
`;
